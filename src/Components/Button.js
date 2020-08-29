import React from "react";
import { Button } from "react-bootstrap";
import Spinner from "./Spinner";

export default ({
  isValid = false,
  loadingColor,
  loading,
  value,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="default"
      className={`text-truncate ${props.className}`}
      {...(loading && { disabled: true })}
      {...(!isValid && { disabled: true })}
    >
      {loading ? (
        <Spinner contained size={25} color={loadingColor || "#fff"} />
      ) : (
        value
      )}
    </Button>
  );
};
