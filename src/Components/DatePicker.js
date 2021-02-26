import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
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

  return (
    <Fragment>
      {label && <Form.Label>{label}</Form.Label>}
      <Datetime
        dateFormat="YYYY-MM-DD"
        timeFormat={false}
        id={field.name}
        name={field.name}
        inputProps={inputProps}
        onChange={(value) => {
          setFieldValue(field.name, value ? moment(value).format() : "");
        }}
        onBlur={onFieldBlur}
        {...props}
      />
    </Fragment>
  );
};

export default DatePicker;
