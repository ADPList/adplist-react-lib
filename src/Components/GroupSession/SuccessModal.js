import React, { useGlobal, useState, Fragment } from "reactn";
import { Modal, Image } from "react-bootstrap";
import styled from "styled-components";
import {
  useTitle,
  Profile as Account,
  loop,
  helpers,
  Icon,
  Button,
  Grid,
  copyToClipboard,
} from "adplist-react-lib";

const SuccessModal = ({ content, ...props }) => {
  return (
    <Modal onHide={() => setModal(false)} show={modal} size="sm" centered>
      <Modal.Body>
        <Fragment>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Avatar src="https://via.placeholder.com/150" />
            <p className="text-center font-size-24 font-weight-600 px-3 line-height-13">
              Congrats on creating your latest session, Felix Lee 🎉!
            </p>
            <Divider />
            <p className="mb-4 font-size-18 font-weight-600 line-height-13">
              Share your session, get more guests
            </p>
            <p className="text-center px-4 line-height-13 mb-4">
              I’m hosting “Private Session with Mentors” on @ADPList. Starting
              on, Jan 21 at 8:00pm (GMT +8). Join me here!
            </p>
          </div>

          <StyledGrid
            className="grey-4-bg py-12 px-3 mb-3"
            sm="calc(100% - 40px) 24px"
            gap="16px"
          >
            <a className="text-truncate grey-2-text" href={content.url}>
              https://adplist.org/session/qweyewra...
              {/* {content.url} */}
            </a>
            <Icon.Copy
              className="cursor-pointer"
              onClick={() => copyToClipboard(url)}
            />
          </StyledGrid>

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
        </Fragment>
      </Modal.Body>
    </Modal>
  );
};

/**
 * styles
 */

const StyledGrid = styled(Grid)`
  height: 50px;
  align-items: center;
  border-radius: 10px;
  border: solid 1px var(--grey-3);

  a {
    padding-left: 18px;
  }
`;

const Avatar = styled(Image)`
  object-position: center;
  border-radius: 50%;
  object-fit: cover;
  height: 100px;
  width: 100px;
  margin-bottom: 24px;
`;

const Divider = styled.hr`
  border-color: #e3e6ea;
  width: 60%;
  margin-top: 5px;
`;

const TwitterButton = styled(Button)`
  background-color: #00acee;
`;

const LinkedinButton = styled(Button)`
  background-color: #0077b5;
`;

export default SuccessModal;
