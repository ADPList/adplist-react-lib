import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
import Datetime from "react-datetime";
import moment from "moment";

const TimePicker = ({
  label,
  name,
  value,
  placeholderText,
  disabled,
  onFieldBlur,
  setFieldValue,
  validDate,
  ...props
}) => {
  const inputProps = {
    placeholder: placeholderText,
    disabled,
  };

  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Datetime
        dateFormat={false}
        timeFormat
        id={name}
        name={name}
        inputProps={inputProps}
        onChange={(value) => {
          setFieldValue(name, value);
        }}
        onBlur={onFieldBlur}
        {...props}
      />
    </Form.Group>
  );
};

export default TimePicker;
