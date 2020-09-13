import React, { Fragment } from "react";
import ReactTabs from "react-bootstrap/Tabs";
import styled from "styled-components";

const Wrapper = styled.div`
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
`;

const Tabs = ({ children, as, ...props }) => {
  const Render = as || Fragment;

  return (
    <Wrapper>
      <Render>
        <ReactTabs {...props}>{children}</ReactTabs>
      </Render>
    </Wrapper>
  );
};

export default Tabs;
