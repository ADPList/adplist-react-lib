import React, { Fragment } from "react";
import Datetime from "react-datetime";

const DateTimePicker = ({ label, ...props }) => {
  return (
    <Fragment>
      <Datetime {...props} />
    </Fragment>
  );
};

export default DateTimePicker;
