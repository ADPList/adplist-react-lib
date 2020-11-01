import React from "react";
import { ErrorMessage, Field } from "formik";
import { Form } from "react-bootstrap";

import { ErrorBoundary } from "../Utils";

export default ({
  containerProps,
  startadornment,
  endadornment,
  useComponent = true,
  placeholder,
  className,
  children,
  label,
  value,
  name,
  type,
  as,
  ...props
}) => {
  const Render = props.component && useComponent ? props.component : Field;

  return (
    <ErrorBoundary>
      <Form.Group controlId={name} {...containerProps}>
        {label && <Form.Label>{label}</Form.Label>}
        <div
          className={`position-relative d-flex align-items-center ${
            startadornment || endadornment ? "input-container" : ""
          }`}
        >
          {startadornment && (
            <span
              className={`start-adornment ${
                startadornment?.props?.className || ""
              }`}
              {...startadornment?.props}
            >
              {startadornment.children}
            </span>
          )}
          <Render
            className={`form-control ${className || ""} ${
              props.component && useComponent ? "px-0 --border-none" : ""
            } ${startadornment || endadornment ? "--adorned" : ""}`}
            placeholder={placeholder}
            title={placeholder}
            value={value}
            name={name}
            {...(children && { children: children })}
            {...(type && { type: type })}
            {...(as && { as: as })}
            {...props}
          />

          {endadornment && (
            <span
              className={`end-adornment ${endadornment?.props?.className}`}
              {...endadornment?.props}
            >
              {endadornment.children}
            </span>
          )}
        </div>
        <ErrorMessage name={name}>
          {(msg) => (
            <p className="red-text font-size-12 mt-2 ml-20 mb-0">{msg}</p>
          )}
        </ErrorMessage>
      </Form.Group>
    </ErrorBoundary>
  );
};
