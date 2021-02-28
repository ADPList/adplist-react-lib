import React from "react";
import Datetime from "react-datetime";

import Field from "./Field";

const DatePicker = ({ name, disabled, placeholder, ...props }) => {
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
      name={name}
      timeFormat={false}
      component={Datetime}
      dateFormat="MM-DD-YYYY"
      inputProps={inputProps}
      {...props}
    />
  );
};

export default DatePicker;
