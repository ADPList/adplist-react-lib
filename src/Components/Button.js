import React from "react";
import { Button } from "react-bootstrap";
import Spinner from "./Spinner";

export default ({
  isValid = false,
  isSubmitting,
  loadingColor,
  value,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="default"
      className={`btn ${props.className}`}
      {...(isSubmitting && { disabled: true })}
      {...(!isValid && { disabled: true })}
    >
      {isSubmitting ? (
        <Spinner contained size={25} color={loadingColor || "#fff"} />
      ) : (
        value
      )}
    </Button>
  );
};
