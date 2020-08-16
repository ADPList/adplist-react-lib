import React from "react";
import styled from "styled-components";

const StyledTypes = styled.div`
  background-color: #f0f6f9;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  padding: 22px;
  color: #000;
`;

const Tile = ({ children, active }) => {
  return <StyledTypes {...{ active }}>{children}</StyledTypes>;
};

export default Tile;
