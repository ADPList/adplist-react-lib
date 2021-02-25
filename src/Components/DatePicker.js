import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
import Datetime from "react-datetime";
import moment from "moment";

const DatePicker = ({
  label,
  name,
  value,
  date,
  placeholderText,
  disabled,
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
        dateFormat="DD-MM-YYYY"
        value={date}
        inputProps={inputProps}
        isValidDate={validDate}
        onChange={(value) =>
          setFieldValue(name, value ? moment(value).format("YYYY-MM-DD") : "")
        }
        timeFormat={false}
        {...props}
      />
    </Fragment>
  );
};

export default DatePicker;
