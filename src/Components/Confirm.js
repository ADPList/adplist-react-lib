import React from "react";
import { createConfirmation, confirmable } from "react-confirm";
import { Modal } from "react-bootstrap";

import Button from "./Button";

export function Dialog({ show, proceed, confirmation, options }) {
  return (
    <Modal onHide={() => proceed(false)} show={show} centered>
      <Modal.Body className="p-32">
        <p
          className="mb-32 font-size-18 text-center"
          style={{ lineHeight: 1.5 }}
        >
          {confirmation}
        </p>
        <div className="d-flex align-items-center justify-content-center">
          <div className="px-3">
            <Button
              className="btn-48 btn--default"
              onClick={() => proceed(true)}
              style={{ width: 144 }}
              value="Yes"
              isValid
            />
          </div>
          <div className="px-3">
            <Button
              className="btn-48 red-border red-text"
              onClick={() => proceed(false)}
              style={{ width: 144 }}
              value="Cancel"
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
