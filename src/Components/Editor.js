import React from "react";
import styled from "styled-components";

const Editor = ({ name, value, setFieldValue, placeholder, ...props }) => (
  <Textarea
    children={
      <Editor
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
);

export default Editor;

const Textarea = styled.div`
  .mce-content-body {
    min-height: ${({ height }) => height || "136px"};
    background-color: var(--grey-3);
    border: solid 1px transparent;
    border-radius: 4px;
    padding: 16px 20px;
    outline: none;

    &::before {
      color: var(--default);
      padding: 0px 20px;
      line-height: 1.6;
      font-size: 12px;
      opacity: 0.5;
    }

    &:focus {
      border-color: var(--teal);
    }

    p:last-child {
      margin-bottom: 0px;
    }
  }
`;
