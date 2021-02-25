import React, { Fragment } from "react";
import Datetime from "react-datetime";


const DateTimePicker = ({ label, ...props }) => {
  return (
    <Fragment>
      <Datetime dateFormat="DD-MM-YY" timeFormat={false} {...props} />
    </Fragment>
  );
};

export default DateTimePicker;
