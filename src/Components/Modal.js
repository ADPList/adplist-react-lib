import React from "react";
import { Modal } from "react-bootstrap";

export default ({ body, onHide, show, header, ...props }) => {
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
