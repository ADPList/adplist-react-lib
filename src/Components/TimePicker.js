import React, { Fragment } from "react";
import Datetime from "react-datetime";

const TimePicker = ({
  name,
  value,
  label,
  setFieldValue,
  disabled,
  onChange,
  placeholderText,
  ...props
}) => {
  const inputProps = {
    placeholder: placeholderText,
    disabled,
  };
  return (
    <Fragment>
      {label && <label>{label}</label>}
      <Datetime
        dateFormat={false}
        inputProps={inputProps}
        value={value}
        onChange={onChange}
        {...props}
      />
    </Fragment>
  );
};

export default TimePicker;
