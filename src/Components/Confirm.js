import React from "react";
import { createConfirmation, confirmable } from "react-confirm";
import { Modal } from "react-bootstrap";

import Button from "./Button";
import Grid from "../Styles/Grid";

export function Dialog({ show, proceed, confirmation, header, buttons }) {
  return (
    <Modal onHide={() => proceed(false)} show={show} centered>
      <Modal.Body className="p-4">
        {header && (
          <p className="font-weight-600 font-size-20 mb-12">{header}</p>
        )}
        <p className="mb-32 font-size-14 line-height-15">{confirmation}</p>
        <Grid gap="16px" sm="auto auto" className="justify-content-end">
          <Button
            className={`btn--default-outline btn-40 font-size-14 px-3 ${buttons?.cancel?.className}`}
            value={buttons?.cancel?.value || "Cancel"}
            onClick={() => proceed(false)}
            isValid
          />
          <Button
            className={`btn--default btn-40 font-size-14 px-3 ${buttons?.proceed?.className}`}
            value={buttons?.proceed?.value || "Proceed"}
            onClick={() => proceed(true)}
            isValid
          />
        </Grid>
      </Modal.Body>
    </Modal>
  );
}

export const Confirm = createConfirmation(confirmable(Dialog));

export default Confirm;
