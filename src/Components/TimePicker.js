import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const TimePicker = ({ ...props }) => {
  return <Datetime timeFormat dateFormat={false} {...props} />;
};

export default TimePicker;
