import React, { Fragment } from "react";
import Datetime from "react-datetime";

const TimePicker = ({ label, ...props }) => {
  return (
    <Fragment>
      {label && <label>{label}</label>}
      <Datetime dateFormat={false} {...props} />
    </Fragment>
  );
};

export default TimePicker;
