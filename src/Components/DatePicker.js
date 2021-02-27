import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
import { Copy } from "../Icons";
import Datetime from "react-datetime";
import moment from "moment";

const DatePicker = ({
  label,
  field,
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

  const yesterday = moment().subtract(1, "day");
  const valid = (current) => {
    return current.isAfter(yesterday);
  };

  return (
    <Fragment>
      {label && <Form.Label>{label}</Form.Label>}
      <Copy />
      <Datetime
        dateFormat="YYYY-MM-DD"
        timeFormat={false}
        name={field.name}
        inputProps={inputProps}
        onChange={(value) => {
          setFieldValue(field.name, value ? moment(value).format() : "");
        }}
        closeOnSelect
        isValidDate={valid}
        onBlur={onFieldBlur}
        {...props}
      />
    </Fragment>
  );
};

export default DatePicker;
