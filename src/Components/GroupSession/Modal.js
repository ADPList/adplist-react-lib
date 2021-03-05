import React, { useState } from "reactn";
import { toast } from "react-toastify";
import styled from "styled-components";
import flags from "emoji-flags";

import { handleLogin, handleShare, handleTimezone } from "../../Utils/helpers";
import { registerSessionService } from "../../Services/sessionService";
import copyToClipboard from "../../Utils/copyToClipboard";
import useWidth from "../../Utils/useWidth";
import Button from "../Button";
import Notify from "../Notify";
import Modal from "../Modal";
import Grid from "../../Styles/Grid";

import LinkedIn from "../../Icons/LinkedIn";
import Twitter from "../../Icons/Twitter";
import Copy from "../../Icons/Copy";

const GroupSessionModal = ({
  data,
  show,
  user,
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
  const {
    name,
    rsvp,
    slug,
    mentor,
    cancelled,
    rsvp_limit,
    description,
    date_and_time,
  } = details || {};

  const url = process.env.REACT_APP_ADPLIST_URL + `/?group-session=${slug}`;
  const message = (() => {
    const date = handleTimezone(details?.date_and_time, "MMM DD");
    const time = handleTimezone(details?.date_and_time, "hh:mm a");

    if (
      user &&
      !["limbo", "designer"].includes(user?.identity_type?.toLowerCase())
    ) {
      if (mentor?.slug === user[user.identity_type.toLowerCase()]?.slug) {
        return `I’m hosting ${details?.name} on @ADPList. Starting on, ${date} at ${time} (${details?.timezone}). Join me here!`;
      }
    }

    return `I've got a seat at ${details?.name} w/ ${details?.mentor?.name}. Starting on, ${date} at ${time} on @ADPList.`;
  })();

  const hasRegistered = (() => {
    if (user) {
      const registeredUser = rsvp.find(
        (r) => user[r.identity_type.toLowerCase()]?.slug === r?.slug,
      );

      return Boolean(registeredUser);
    } else {
      return false;
    }
  })();

  const isOwner = user?.mentor?.slug === mentor?.slug;

  const width = useWidth();

  /**
   * functions
   */
  const handleRegistration = async () => {
    handleLogin(user, "You need to login to be able to RSVP for this session")
      .then(async () => {
        if (user) {
          setLoading(true);
          registerSessionService(details.id)
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

  return (
    <Modal onHide={onHide} show={show} size="sm" centered>
      <Wrapper {...props}>
        <div className="session__info mb-3">
          {date_and_time && (
            <p className="grey-2-text mb-0">
              {handleTimezone(date_and_time, "MMM DD, ha ([GMT] Z)")}
            </p>
          )}

          {name && (
            <p className="font-size-20 font-weight-600 mb-2 line-height-16">
              {name}
            </p>
          )}
          {description && (
            <p
              className="grey-1-text line-height-16 mb-0"
              style={{ wordBreak: "break-word" }}
            >
              {description}
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
              process.env.REACT_APP_ADPLIST_URL + `/mentors/${mentor?.slug}`
            }
            className="text-decoration-none d-flex align-items-center black-text"
          >
            <Avatar src={mentor?.profile_photo_url} className="mr-3" />
            <div>
              <p className="line-height-16 font-weight-500 mb-1">
                {mentor?.name}{" "}
                {mentor?.country?.iso &&
                  flags.countryCode(mentor?.country?.iso).emoji}
              </p>
              <p className="font-size-14 mb-0">
                <span className="font-weight-500">{mentor?.title}</span> at{" "}
                <span className="font-weight-500">{mentor?.employer}</span>
              </p>
            </div>
          </a>
        </div>

        {rsvp?.length > 0 && (
          <div className="session__mentees mb-32 pb-2">
            <p className="font-size-14 grey-2-text line-height-13 mt-12">
              Mentees attending ({rsvp?.length}/{rsvp_limit}):
            </p>

            {rsvp?.length > 0 && (
              <Images>
                {rsvp.map((member, key) => {
                  if ((width < 768 && key <= 8) || (width > 767 && key <= 12))
                    return (
                      <Avatar
                        key={key}
                        className="cursor-pointer"
                        src={member?.profile_photo_url}
                        onClick={() => handleMember(member)}
                      />
                    );

                  if ((width < 768 && key === 9) || (width > 767 && key === 13))
                    return (
                      <RsvpAll>
                        {width < 768 && rsvp.length - 9}
                        {width > 767 && rsvp.length - 13}+
                      </RsvpAll>
                    );
                })}
              </Images>
            )}
          </div>
        )}

        {!isPrivate && !isOwner && (
          <Grid gap="24px" className="session__actions">
            {!hasRegistered && cancelled && (
              <Alert className="muted-pink-bg danger-text">
                RSVP for this session closed.
              </Alert>
            )}

            {hasRegistered && (
              <Alert className="muted-green-bg teal-text">
                Congrats, you’re in this session!
              </Alert>
            )}

            {!cancelled && rsvp?.length < rsvp_limit && !hasRegistered && (
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

        <div className="session__share">
          <div className="session__share__url">
            <p className="grey-2-text line-height-13 mb-3 font-size-14">
              Spread the word
            </p>

            <div className="share__url">
              <span>
                <a
                  href="/"
                  onClick={(e) => e.preventDefault()}
                  className="text-truncate"
                >
                  {url}
                </a>
              </span>
              <Copy
                className="mx-auto cursor-pointer"
                onClick={() => copyToClipboard(url)}
              />
            </div>
          </div>

          <div className="session__share__buttons">
            <Button
              isValid
              className="-linkedin"
              onClick={() => handleShare("linkedin", mentor, url, message)}
            >
              <LinkedIn color="white" size={18} />
              <span>Share on LinkedIn</span>
            </Button>
            <Button
              isValid
              onClick={() => handleShare("twitter", mentor, url, message)}
              className="-twitter"
            >
              <Twitter size={18} color="white" />
              <span>Tweet this session</span>
            </Button>
          </div>
        </div>
      </Wrapper>
    </Modal>
  );
};

/**
 * styles
 */

const Wrapper = styled.div`
  .share__url {
    gap: 24px;
    width: 100%;
    height: 60px;
    display: grid;
    align-items: center;
    border-radius: 10px;
    border: solid 1px var(--grey-3);
    grid-template-columns: 1fr 54px;

    span {
      height: 100%;
      display: flex;
      overflow: hidden;
      padding-left: 18px;
      padding-right: 16px;
      border-right: solid 1px var(--black-20);

      a {
        width: 100%;
        margin: auto;
        opacity: 0.7;
        color: var(--grey-2);
      }
    }
  }

  .session__actions {
    margin-bottom: 40px;
  }

  .session__share {
    gap: 18px;
    display: grid;

    &__buttons {
      gap: 18px;
      display: grid;

      .btn {
        height: 56px;
        width: 100%;

        span {
          color: #fff;
          margin-left: 8px;
        }

        &.-twitter {
          background-color: #00acee;
        }
        &.-linkedin {
          background-color: #0077b5;
        }
      }
    }
  }
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%;
  object-position: center;
`;

const RsvpAll = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: var(--muted-grey);
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

export default GroupSessionModal;
