import React, { useGlobal, Fragment } from "reactn";
import { Modal } from "react-bootstrap";
import moment from "moment";
import styled from "styled-components";
import emoji from "emoji-flags";

import { handleShare } from "../../Utils/helpers";
import Button from "../Button";

import LinkedIn from "../../Icons/LinkedIn";
import Twitter from "../../Icons/Twitter";
import Copy from "../../Icons/Copy";

const GroupSessionModal = ({ show, onHide, data, ...props }) => {
  /**
   * variables
   */
  const {
    name,
    rsvp,
    slug,
    mentor,
    cancelled,
    description,
    data_and_time,
  } = data;

  const url = process.env.REACT_APP_ADPLIST_URL + `/?group-session=${slug}`;
  const message = `I’m hosting ${name} on @ADPList. Starting on, <MM DD> at <HH:MM> am/pm (<their local timezone>). Join me here!`;

  return (
    <Modal onHide={onHide} show={show} size="sm" centered>
      <Modal.Body className="p-4">
        <Wrapper {...props}>
          <div className="d-flex flex-column justify-content-center align-items-start">
            {date_and_time && (
              <p className="grey-2-text">
                {moment(date_and_time).format("MMM D, HH:MM A")}
              </p>
            )}
            {name && <p className="font-size-20 font-weight-600">{name}</p>}
            {description && (
              <p className="grey-1-text line-height-13">{description}</p>
            )}
            <p className="grey-2-text line-height-13 mb-3">Organised by:</p>

            <div className="modal__footer d-flex align-items-center">
              <Avatar src={mentor?.profile_photo_url} />
              <div className="media-body px-3">
                <p className="font-weight-bold mb-1">
                  {mentor?.name} {emoji.countryCode(mentor?.country?.iso)}
                </p>
                <p className="font-size-14 mb-0 text-truncate">
                  {mentor?.title} at {mentor?.employer}
                </p>
              </div>
            </div>

            <p className="grey-2-text line-height-13 mt-3">
              Mentees attending ({rsvp.length}/50):
            </p>
          </div>

          {rsvp?.length > 0 && (
            <Images>
              {rsvp.map((member, key) => (
                <Avatar src={member?.profile_photo_url} key={key} />
              ))}
            </Images>
          )}

          {cancelled && (
            <Button isValid className="w-100 teal-bg btn-56 white-text mb-3">
              RSVP for this session
            </Button>
          )}

          <Button isValid className="w-100 teal-bg btn-56 white-text mb-3">
            RSVP for this session
          </Button>

          <p className="grey-2-text line-height-13 mt-4">Spread the word</p>

          <div className="modal__input mb-3">
            <span>
              <a href="/" className="text-truncate">
                {url}
              </a>
            </span>
            <Copy className="mx-auto" />
          </div>

          <div>
            <LinkedinButton
              isValid
              className="w-100 btn-56 white-text mb-3"
              onClick={() => handleShare("linkedin", mentor, url, message)}
            >
              <LinkedIn color="#fff" variant="default" size={18} />
              <span className="ml-2 font-size-14">Share on LinkedIn</span>
            </LinkedinButton>
            <TwitterButton
              isValid
              onClick={() => handleShare("twitter", mentor, url, message)}
              className="w-100 twitter-bg btn-56 white-text"
            >
              <Twitter variant="default" size={18} color="white" />
              <span className="ml-2 font-size-14">Tweet this session</span>
            </TwitterButton>
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
  .modal__input {
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
        color: var(--grey-2);
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
  padding-bottom: 30px;
  grid-template-columns: repeat(5, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

const TwitterButton = styled(Button)`
  background-color: #00acee;
`;

const LinkedinButton = styled(Button)`
  background-color: #0077b5;
`;

export default GroupSessionModal;
