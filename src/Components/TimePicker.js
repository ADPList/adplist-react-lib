import React from "react";
import Datetime from "react-datetime";

import Field from "./Field";

const TimePicker = ({ name, disabled, validDate, placeholder, ...props }) => {
  /**
   * variables
   */
  const inputProps = {
    placeholder,
    disabled,
  };

  return (
    <Field
      id={name}
      timeFormat
      name={name}
      dateFormat={false}
      component={Datetime}
      inputProps={inputProps}
      {...props}
    />
  );
};

export default TimePicker;
