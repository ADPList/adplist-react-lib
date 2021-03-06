import React from "react";
import { Container, Modal } from "react-bootstrap";
import styled from "styled-components";

import Close from "../Icons/CloseCircle";
import Logo from "../Icons/AdpLogo";

export default ({ className, children, ...props }) => {
  const size = props.size;

  if (size === "full") {
    return <LargeModal {...{ ...props, children }} />;
  }

  return (
    <Modal {...props}>
      <ModalBody className={className}>
        <ModalClose onClick={props.onHide} size={24} />
        {children}
      </ModalBody>
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
const ModalBody = styled(Modal.Body)`
  position: relative;
`;

const ModalClose = styled(Close)`
  top: 12px;
  right: 12px;
  cursor: pointer;
  position: absolute;
`;

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
