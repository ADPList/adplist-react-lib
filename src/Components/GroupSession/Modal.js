import React, { useGlobal, Fragment } from "reactn";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import moment from "moment";
import { Button, helpers, Icon } from "adplist-react-lib";

const GroupSessionModal = ({ url, show, onHide, ...props }) => {
  /**
   * variables
   */
  const [sessionDetails] = useGlobal("sessionDetails");

  return (
    <Modal onHide={onHide} show={show} size="sm" centered>
      <Modal.Body>
        <Wrapper>
          <div className="d-flex flex-column justify-content-center align-items-start">
            <p className="grey-2-text">
              {moment(sessionDetails?.date_and_time).format("MMM D, HH:MM A")}
            </p>
            <p className="font-size-20 font-weight-600">
              {sessionDetails?.name}
            </p>
            <p className="grey-1-text line-height-13">
              {sessionDetails?.description}
            </p>
            <p className="grey-2-text line-height-13 mb-3">Organised by:</p>

            <div className="modal__footer d-flex align-items-center">
              <Avatar src={sessionDetails?.mentor?.profile_photo_url} />
              <div className="media-body px-3">
                <p className="font-weight-bold mb-1">
                  {sessionDetails?.mentor?.name} 🇺🇸
                </p>
                <p className="font-size-14 mb-0 text-truncate">
                  {sessionDetails?.mentor?.title} at{" "}
                  {sessionDetails?.mentor?.employer}
                </p>
              </div>
            </div>

            <p className="grey-2-text line-height-13 mt-3">
              Mentees attending ({sessionDetails?.rsvp.length}/50):
            </p>
          </div>

          <Images>
            {sessionDetails?.rsvp.map((member, key) => (
              <Fragment key={key}>
                <Avatar src={member?.profile_photo_url} />
              </Fragment>
            ))}
          </Images>

          {sessionDetails?.cancelled && (
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
                https://adplist.org/session/qweyewra...
              </a>
            </span>
            <Icon.Copy className="mx-auto" />
          </div>

          <div>
            <LinkedinButton
              isValid
              className="w-100 btn-56 white-text mb-3"
              onClick={() => helpers.handleShare("linkedin", mentor, url)}
            >
              <Icon.LinkedIn color="#fff" variant="default" size={18} />
              <span className="ml-2 font-size-14">Share on LinkedIn</span>
            </LinkedinButton>
            <TwitterButton
              isValid
              onClick={() => helpers.handleShare("twitter", mentor, url)}
              className="w-100 twitter-bg btn-56 white-text"
            >
              <Icon.Twitter variant="default" size={18} color="white" />
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
    width: 100%;
    height: 60px;
    display: grid;
    border-radius: 10px;
    align-items: center;
    border: solid 1px var(--grey-3);
    grid-template-columns: calc(100% - 53px) 54px;

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
  object-position: center;
  border-radius: 50%;
`;

const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 8px;
  padding-bottom: 30px;

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
