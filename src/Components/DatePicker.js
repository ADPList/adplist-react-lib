import React from "react";
import { Form } from "react-bootstrap";
import Datetime from "react-datetime";

const DatePicker = ({
  name,
  label,
  disabled,
  onFieldBlur,
  setFieldValue,
  placeholderText,
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
        id={name}
        name={name}
        closeOnSelect
        timeFormat={false}
        onBlur={onFieldBlur}
        dateFormat="YYYY-MM-DD"
        inputProps={inputProps}
        onChange={(value) => setFieldValue(name, value)}
        {...props}
      />
    </Form.Group>
  );
};

export default DatePicker;
