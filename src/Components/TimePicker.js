import React from "react";
import { Form } from "react-bootstrap";
import Datetime from "react-datetime";

const TimePicker = ({
  label,
  name,
  value,
  disabled,
  validDate,
  onFieldBlur,
  setFieldValue,
  placeholderText,
  ...props
}) => {
  /**
   * variables
   */
  const inputProps = {
    placeholder: placeholderText,
    disabled,
  };

  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Datetime
        id={name}
        timeFormat
        name={name}
        dateFormat={false}
        onBlur={onFieldBlur}
        inputProps={inputProps}
        onChange={(value) => setFieldValue(name, value)}
        {...props}
      />
    </Form.Group>
  );
};

export default TimePicker;
