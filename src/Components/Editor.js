import React from "react";
import { Editor as TinyMce } from "@tinymce/tinymce-react";
import { ErrorMessage } from "formik";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * prop definition
 */
const propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  setFieldValue: PropTypes.func,
};

const defaultProps = {
  init: { menubar: true, toolbar: true },
};

const Editor = ({
  name,
  value,
  label,
  init,
  placeholder,
  setFieldValue,
  ...props
}) => (
  <Form.Group controlId={name}>
    {label && <Form.Label>{label}</Form.Label>}
    <Wrapper {...{ placeholder }}>
      <Textarea
        children={
          <TinyMce
            inline
            value={value || ""}
            plugins={["link image"]}
            apiKey={process.env.REACT_APP_TINYMCE_KEY}
            onEditorChange={(content) => setFieldValue(name, content)}
            init={{
              ...init,
              placeholder: placeholder || "",
            }}
          />
        }
      />
    </Wrapper>
    <ErrorMessage name={name}>
      {(msg) => <p className="red-text font-size-10 mt-2 ml-20 mb-0">{msg}</p>}
    </ErrorMessage>
  </Form.Group>
);

Editor.propTypes = propTypes;
Editor.defaultProps = defaultProps;

export default Editor;

const Wrapper = styled.div`
  background-color: var(--grey-4);
  border-radius: 10px;
  position: relative;
  min-height: 136px;

  &::before {
    content: "${({ placeholder }) => placeholder || " "}";
    color: var(--black);
    padding: 21px 22px;
    position: absolute;
    font-size: 14px;
    display: block;
    opacity: 0.65;
  }
`;

const Textarea = styled.div`
  .mce-content-body {
    min-height: ${({ height }) => height || "136px"};
    background-color: var(--grey-4);
    border: solid 1px var(--grey-3);
    border-radius: 10px;
    padding: 16px 20px;
    line-height: 1.5;
    outline: none;

    &::before {
      color: var(--default);
      padding: 0px 20px;
      font-size: 16px;
      opacity: 0.65;
    }

    &:focus {
      border-color: var(--black);
    }

    p:last-child {
      margin-bottom: 0px;
    }
  }
`;
