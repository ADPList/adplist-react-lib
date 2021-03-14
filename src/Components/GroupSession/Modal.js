import React, { useState, Fragment } from "reactn";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast } from "react-toastify";
import styled from "styled-components";
import flags from "emoji-flags";

import {
  registerSessionService,
  cancelSessionService,
} from "../../Services/sessionService";
import {
  handleLogin,
  handleShare,
  handleTimezone,
  userRoute,
} from "../../Utils/helpers";
import copyToClipboard from "../../Utils/copyToClipboard";
import useWidth from "../../Utils/useWidth";
import Confirm from "../../Components/Confirm";
import Spinner from "../Spinner";
import Button from "../Button";
import Notify from "../Notify";
import Modal from "../Modal";
import Grid from "../../Styles/Grid";

import LinkedIn from "../../Icons/LinkedIn";
import Twitter from "../../Icons/Twitter";
import Copy from "../../Icons/Copy";

const GroupSessionModal = ({
  show,
  user,
  past,
  data,
  error,
  onHide,
  isPrivate,
  mutate = () => {},
  ...props
}) => {
  /**
   * state
   */
  const [details, setDetails] = useState(data);
  const [isLoading, setLoading] = useState(false);

  /**
   * variables
   */
  const { mentor } = details || {};

  const url =
    process.env.REACT_APP_ADPLIST_URL + `/?group-session=${data?.slug}`;
  const message = (() => {
    const date = handleTimezone(data?.date_and_time, "MMM DD");
    const time = handleTimezone(data?.date_and_time, "hh:mm a");

    if (
      user &&
      ![process.env.REACT_APP_LIMBO, process.env.REACT_APP_MEMBER].includes(
        user?.identity_type?.toLowerCase(),
      )
    ) {
      if (mentor?.slug === user[user.identity_type.toLowerCase()]?.slug) {
        return `I’m hosting ${data?.name} on @ADPList. Starting on, ${date} at ${time} (${data?.timezone}). Join me here!`;
      }
    }

    return `I've got a seat at ${data?.name} w/ ${data?.mentor?.name}. Starting on, ${date} at ${time} on @ADPList.`;
  })();

  const hasRegistered = data?.user_in_rsvp;
  const isOwner = user?.mentor?.slug === data?.mentor?.slug;
  const width = useWidth();

  /**
   * functions
   */
  const handleRegistration = async () => {
    handleLogin(user, "You need to login to be able to RSVP for this session")
      .then(async () => {
        if (user) {
          setLoading(true);
          registerSessionService(data?.id)
            .then(
              (response) =>
                toast(
                  <Notify
                    type="success"
                    body="Congrats - you're in 🤩! We've sent an invite - add it your calendar and spread the word 🎉!"
                  />,
                ) |
                setDetails(response) |
                mutate(),
            )
            .catch(() =>
              toast(<Notify body="Unable to RSVP for session" type="error" />),
            )
            .finally(() => setLoading(false));
        }
      })
      .catch(() => setLoading(false));
  };

  const handleMember = (member) => {
    if (typeof window !== "undefined") {
      window.open(
        `${
          process.env.REACT_APP_ADPLIST_URL
        }/${member?.identity_type?.toLowerCase()}s/${member?.slug}`,
      );
    }
  };

  const handleCancellation = async () => {
    if (
      await Confirm({
        header: "Cancel this rsvp",
        confirmation: "Are you sure you want to cancel this booking",
        buttons: {
          proceed: {
            value: "Yes, cancel this",
          },
          cancel: {
            value: "No never mind",
          },
        },
      })
    ) {
      setLoading(true);
      cancelSessionService(data?.id)
        .then(
          (response) =>
            toast(<Notify body="RSVP has been cancelled" type="success" />) |
            setDetails(response) |
            mutate(),
        )
        .catch(() =>
          toast(<Notify body="Unable to cancel booking" type="error" />),
        )
        .finally(() => setLoading(false));
    }
  };

  return (
    <Modal onHide={onHide} show={show} size="sm" centered>
      {!data && !error && <Spinner center contained />}

      <Wrapper {...props}>
        {data && (
          <Fragment>
            <div className="session__info mb-3">
              {data?.date_and_time && (
                <p className="grey-2-text mb-0">
                  {handleTimezone(data?.date_and_time, "MMM DD, ha ([GMT] Z)")}
                </p>
              )}

              {data?.name && (
                <p className="font-size-20 font-weight-600 mb-2 line-height-16">
                  {data?.name}
                </p>
              )}
              {data?.description && (
                <p
                  className="grey-1-text line-height-16 mb-0"
                  style={{ wordBreak: "break-word" }}
                >
                  {data?.description}
                </p>
              )}
            </div>

            <div className="session__organizer mb-32">
              <p className="font-size-14 grey-2-text line-height-13 mb-12">
                Organised by:
              </p>

              <a
                target="mentor"
                href={
                  process.env.REACT_APP_ADPLIST_URL +
                  `/${userRoute(process.env.REACT_APP_MENTOR)}/${
                    data?.mentor?.slug
                  }`
                }
                className="text-decoration-none d-flex align-items-center black-text"
              >
                <LazyLoadImage
                  src={data?.mentor?.profile_photo_url}
                  className="avatar mr-3"
                />
                <div>
                  <p className="line-height-16 font-weight-500 mb-1">
                    {data?.mentor?.name}{" "}
                    {data?.mentor?.country_iso &&
                      flags.countryCode(data?.mentor?.country_iso).emoji}
                  </p>
                  <p className="font-size-14 mb-0">
                    <span className="font-weight-500">
                      {data?.mentor?.title}
                    </span>{" "}
                    at{" "}
                    <span className="font-weight-500">
                      {data?.mentor?.employer}
                    </span>
                  </p>
                </div>
              </a>
            </div>

            {data?.rsvp?.length > 0 && (
              <div className="session__mentees mb-32 pb-2">
                <p className="font-size-14 grey-2-text line-height-13 mt-12">
                  Mentees attending ({data?.rsvp?.length}/{data?.rsvp_limit}):
                </p>

                {data?.rsvp?.length > 0 && (
                  <Images>
                    {data?.rsvp.map((member, key) => {
                      if (
                        (width < 768 && key <= 8) ||
                        (width > 767 && key <= 12)
                      )
                        return (
                          <LazyLoadImage
                            key={key}
                            className="avatar cursor-pointer"
                            src={member?.profile_photo_url}
                            onClick={() => handleMember(member)}
                          />
                        );

                      if (
                        (width < 768 && key === 9) ||
                        (width > 767 && key === 13)
                      )
                        return (
                          <div className="avatar d-flex align-items-center justify-content-center">
                            {width < 768 && data?.rsvp.length - 9}
                            {width > 767 && data?.rsvp.length - 13}+
                          </div>
                        );
                    })}
                  </Images>
                )}
              </div>
            )}

            {!isPrivate && !isOwner && data?.active && (
              <Grid gap="24px" className="session__actions">
                {!data?.cancelled &&
                  data?.rsvp?.length === data?.rsvp_limit &&
                  !hasRegistered && (
                    <Alert className="muted-green-bg teal-text">
                      There are no more seats for this session
                    </Alert>
                  )}

                {!hasRegistered && data?.cancelled && (
                  <Alert className="muted-pink-bg danger-text">
                    RSVP for this session closed
                  </Alert>
                )}

                {hasRegistered && (
                  <Alert className="muted-green-bg teal-text font-weight-400">
                    RSVPed, you're all set! &nbsp;
                    <a
                      target="session"
                      href={data?.video_url}
                      className="teal-text font-weight-600"
                    >
                      Join session
                    </a>
                  </Alert>
                )}

                {!data?.cancelled &&
                  data?.rsvp?.length < data?.rsvp_limit &&
                  !hasRegistered &&
                  !past && (
                    <Button
                      isValid
                      loading={isLoading}
                      className="w-100 teal-bg btn-56 white-text"
                      onClick={() => handleRegistration()}
                    >
                      RSVP for this session
                    </Button>
                  )}
              </Grid>
            )}

            {data?.active && (
              <div className="session__share">
                <div className="session__share__url">
                  <p className="line-height-13 mb-3 font-size-16">
                    Spread the word
                  </p>

                  <div className="session__share__buttons">
                    <Button
                      isValid
                      className="-linkedin"
                      onClick={() =>
                        handleShare("linkedin", mentor, url, message)
                      }
                    >
                      <LinkedIn color="white" size={18} />
                      <span>Share</span>
                    </Button>
                    <Button
                      isValid
                      onClick={() =>
                        handleShare("twitter", mentor, url, message)
                      }
                      className="-twitter"
                    >
                      <Twitter size={18} color="white" />
                      <span>Tweet</span>
                    </Button>
                    <Button
                      isValid
                      loadingColor="var(--black)"
                      className="black-border white-bg"
                      onClick={() => copyToClipboard(url)}
                    >
                      <Copy size={18} />
                      <span>Copy Link</span>
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {hasRegistered && !data?.cancelled && data?.active && (
              <Fragment>
                <Divider />
                <Button
                  isValid
                  loading={isLoading}
                  loadingColor="var(--black)"
                  onClick={() => handleCancellation()}
                  className="font-weight-600 grey-2-border grey-2-text btn-60 w-100"
                >
                  Cancel this RSVP
                </Button>
              </Fragment>
            )}
          </Fragment>
        )}
      </Wrapper>
    </Modal>
  );
};

/**
 * styles
 */

const Wrapper = styled.div`
  .share__url {
    width: 100%;
    height: 60px;
    display: grid;
    align-items: center;
    border-radius: 10px;
    border: solid 1px var(--grey-3);
    grid-template-columns: 48px 1fr;

    span {
      a {
        width: 100%;
        margin: auto;
        color: var(--black);
      }
    }
  }

  .session__actions {
    margin-bottom: 20px;

    a {
      text-decoration: underline;
    }
  }

  .session__share {
    &__buttons {
      display: grid;
      gap: 16px;

      .btn {
        height: 60px;
        width: 100%;

        span {
          margin-left: 8px;
        }

        &.-twitter {
          background-color: #00acee;
          color: #fff;
        }
        &.-linkedin {
          background-color: #0077b5;
          color: #fff;
        }
      }

      @media (min-width: 778px) {
        grid-template-columns: 124px 116px minmax(0, 1fr);
        gap: 6px;
      }
    }
  }

  .avatar {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 50%;
    object-position: center;
    background-color: var(--muted-grey);
  }
`;

const Images = styled.div`
  gap: 8px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

const Alert = styled.div`
  height: 60px;
  display: flex;
  font-weight: 500;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

const Divider = styled.hr`
  margin-top: 20px;
  margin-bottom: 14px;
`;

export default GroupSessionModal;
