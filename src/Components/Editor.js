import React from "react";
import styled from "styled-components";

import { Editor as TinyMce } from "@tinymce/tinymce-react";
import { Form } from "react-bootstrap";
import { ErrorMessage } from "formik";

const Editor = ({
  name,
  value,
  label,
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
              menubar: true,
              toolbar: true,
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

export default Editor;

const Wrapper = styled.div`
  background-color: var(--grey-3);
  border-radius: 10px;
  position: relative;
  min-height: 136px;

  &::before {
    content: "${({ placeholder }) => placeholder || " "}";
    color: var(--default);
    padding: 21px 22px;
    position: absolute;
    font-size: 14px;
    display: block;
    opacity: 0.5;
  }
`;

const Textarea = styled.div`
  .mce-content-body {
    min-height: ${({ height }) => height || "136px"};
    background-color: var(--grey-3);
    border: solid 1px transparent;
    border-radius: 10px;
    padding: 16px 20px;
    outline: none;

    &::before {
      color: var(--default);
      padding: 0px 20px;
      font-size: 14px;
      opacity: 0.8;
    }

    &:focus {
      border-color: var(--teal);
    }

    p:last-child {
      margin-bottom: 0px;
    }
  }
`;
