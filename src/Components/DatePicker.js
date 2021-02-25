import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
import Datetime from "react-datetime";

import "react-datetime/css/react-datetime.css";

const DateTimePicker = ({ label, ...props }) => {
  return (
    <Fragment>
      {label && <Form.Label>{label}</Form.Label>}
      <Datetime dateFormat="DD-MM-YY" timeFormat={false} {...props} />
    </Fragment>
  );
};

export default DateTimePicker;
