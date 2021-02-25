import React, { Fragment } from "react";
import Datetime from "react-datetime";

const DatePicker = ({ label, ...props }) => {
  return (
    <Fragment>
      {label && <label>{label}</label>}
      <Datetime dateFormat="DD-MM-YYYY" timeFormat={false} {...props} />
    </Fragment>
  );
};

export default DatePicker;
