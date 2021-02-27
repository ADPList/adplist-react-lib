import React from "react";
import { Container, Modal } from "react-bootstrap";
import styled from "styled-components";

import Close from "../Icons/CloseCircle";
import Logo from "../Icons/AdpLogo";

export default ({ body, onHide, show, header, ...props }) => {
  const size = props.size;

  if (size === "full") {
    return <LargeModal {...{ show, onHide, ...props }} />;
  }

  return (
    <Modal onHide={() => {}} centered show={show} {...props}>
      <Modal.Body className={body || "p-32"}>
        {onHide && (
          <div className="d-flex align-items-center mb-32">
            <span className="cursor-pointer d-block mr-2 mt-1" onClick={onHide}>
              <i className="material-icons font-size-28">arrow_back</i>
            </span>
            <h1 className="font-size-24 mb-0 font-weight-600">{header}</h1>
          </div>
        )}
        {props.component || props.children}
      </Modal.Body>
    </Modal>
  );
};

const LargeModal = ({ onHide, show, ...props }) => {
  return (
    <LargeModalWrapper centered show={show} onHide={() => {}} {...props}>
      <Modal.Body className="p-0 h-100">
        <LargeModalNav>
          <Container>
            <Logo />
            <Close size={48} className="cursor-pointer" onClick={onHide} />
          </Container>
        </LargeModalNav>
        <LargeModalBody>{props.component || props.children}</LargeModalBody>
      </Modal.Body>
    </LargeModalWrapper>
  );
};

/**
 * styles
 */
const LargeModalBody = styled(Container)`
  height: calc(100% - 70px);
  overflow-y: auto;
`;

const LargeModalNav = styled.div`
  height: 70px;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const LargeModalWrapper = styled(Modal)`
  .modal-dialog {
    width: 100%;
    margin: 0px;
    height: 100%;
    max-width: 100%;

    .modal-content {
      height: 100%;
      border-radius: 0px;
    }
  }
`;
