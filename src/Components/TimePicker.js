import React from "react";
import Datetime from "react-datetime";

const TimePicker = ({ ...props }) => {
  return <Datetime timeFormat dateFormat={false} {...props} />;
};

export default TimePicker;
