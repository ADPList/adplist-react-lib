import React from "react";
import { createConfirmation, confirmable } from "react-confirm";
import { Modal } from "react-bootstrap";

import Button from "./Button";

export function Dialog({ show, proceed, confirmation, header, options }) {
  return (
    <Modal onHide={() => proceed(false)} show={show} centered>
      <Modal.Body className="p-24">
        {header && (
          <p className="font-weight-600 font-size-20 mb-12">{header}</p>
        )}
        <p className="mb-32 font-size-14 line-height-15">{confirmation}</p>
        <div className="d-flex align-items-center justify-content-end">
          <div className="px-2">
            <Button
              className="btn--default-reverse px-3"
              onClick={() => proceed(false)}
              value="Cancel"
              isValid
            />
          </div>
          <div className="px-2">
            <Button
              className="btn--default px-3"
              onClick={() => proceed(true)}
              value="Confirm"
              isValid
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export const Confirm = createConfirmation(confirmable(Dialog));

export default Confirm;
