import React from "react";
import styled from "styled-components";

const StyledTypes = styled.span`
  background-color: ${({ active }) => (active ? "#05051B" : "#f0f6f9")};
  color: ${({ active }) => (active ? "#ffffff" : "#000000")};
  transition: ease all 0.25s;
  display: inline-block;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  padding: 22px;
`;

const Tile = ({ children, active }) => {
  return <StyledTypes {...{ active }}>{children}</StyledTypes>;
};

export default Tile;
