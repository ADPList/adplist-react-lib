import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
import Datetime from "react-datetime";
import moment from "moment";

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
    <Fragment>
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
    </Fragment>
  );
};

export default DatePicker;
