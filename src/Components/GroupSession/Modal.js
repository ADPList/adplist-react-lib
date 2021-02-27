import React, { useGlobal } from "reactn";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import styled from "styled-components";
import flags from "emoji-flags";

import { handleLogin, handleShare, handleTimezone } from "../../Utils/helpers";
import { registerSessionService } from "../../Services/sessionService";
import copyToClipboard from "../../Utils/copyToClipboard";
import Button from "../Button";
import Notify from "../Notify";

import LinkedIn from "../../Icons/LinkedIn";
import Twitter from "../../Icons/Twitter";
import Copy from "../../Icons/Copy";

const GroupSessionModal = ({
  data,
  show,
  mutate,
  onHide,
  isPrivate,
  ...props
}) => {
  /**
   * state
   */
  const [user] = useGlobal("user");

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
  } = data || {};

  const url = process.env.REACT_APP_ADPLIST_URL + `/?group-session=${slug}`;
  const message = (() => {
    const date = handleTimezone(data?.date_and_time, "MMM DD");
    const time = handleTimezone(data?.date_and_time, "hh:mm a");

    if (
      user &&
      !["limbo", "designer"].includes(user?.identity_type?.toLowerCase())
    ) {
      if (mentor.slug === user[user.identity_type.toLowerCase()].slug) {
        return `I’m hosting ${data?.name} on @ADPList. Starting on, ${date} at ${time} (${data?.timezone}). Join me here!`;
      }
    }

    return `I've got a seat at ${data?.name} w/ ${data?.mentor?.name}. Starting on, ${date} at ${time} on @ADPList. ${url}`;
  })();

  const hasRegistered = (() => {
    if (user) {
      const registeredUser = rsvp.find(
        (r) => user[r.identity_type.toLowerCase()].slug === r.slug,
      );

      return Boolean(registeredUser);
    } else {
      return false;
    }
  })();

  const isOwner = user?.mentor?.slug === mentor?.slug;

  /**
   * functions
   */
  const handleRegistration = async () => {
    handleLogin(
      user,
      "You need to login to be able to RSVP for this session",
    ).then(async () => {
      registerSessionService(data.slug).then(
        () =>
          toast(
            <Notify
              body="Registration for session successful"
              type="success"
            />,
          ) | mutate(),
      );
    });
  };

  return (
    <Modal onHide={onHide} show={show} size="sm" centered>
      <Modal.Body className="p-4">
        <Wrapper {...props}>
          <div className="session__info mb-3">
            {date_and_time && (
              <p className="grey-2-text mb-12">
                {handleTimezone(date_and_time, "MMM DD, ha")}
              </p>
            )}
            {name && (
              <p className="font-size-20 font-weight-600 mb-2 line-height-16">
                {name}
              </p>
            )}
            {description && (
              <p className="grey-1-text line-height-16 mb-0">{description}</p>
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

          <div className="session__mentees mb-32 pb-2">
            <p className="font-size-14 grey-2-text line-height-13 mt-12">
              Mentees attending ({rsvp?.length}/{rsvp_limit}):
            </p>

            {rsvp?.length > 0 && (
              <Images>
                {rsvp.map((member, key) => (
                  <Avatar src={member?.profile_photo_url} key={key} />
                ))}
              </Images>
            )}
          </div>

          {!isPrivate && (
            <div className="session__actions">
              {cancelled && (
                <Alert className="muted-pink-bg danger-text">
                  RSVP for this session closed.
                </Alert>
              )}

              {hasRegistered && (
                <Alert className="muted-green-bg teal-text">
                  Congrats, you’re in this session!
                </Alert>
              )}

              {!cancelled &&
                rsvp?.length < rsvp_limit &&
                !hasRegistered &&
                !isOwner && (
                  <Button
                    isValid
                    className="w-100 teal-bg btn-56 white-text"
                    onClick={() => handleRegistration()}
                  >
                    RSVP for this session
                  </Button>
                )}
            </div>
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
      </Modal.Body>
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
