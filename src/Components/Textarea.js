import React from "react";
import Textarea from "react-textarea-autosize";

export default ({ field, form: { touched, errors }, ...props }) => {
  return <Textarea {...field} {...props} />;
};
