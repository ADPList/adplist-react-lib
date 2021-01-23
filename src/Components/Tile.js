import React from "react";
import styled from "styled-components";

const Tile = ({ children, ...props }) => (
  <Wrapper {...props}>
    {props.active && <i className="material-icons font-size-16">check</i>}
    <span>{children}</span>
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: ${({ active }) =>
    active ? "var(--black)" : "var(--grey-3)"};
  color: ${({ active }) => (active ? "#ffffff" : "var(--grey-1)")};
  transition: ease all 0.25s;
  justify-content: center;
  border-radius: 100px;
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  line-height: 24px;
  cursor: pointer;

  i {
    margin-right: 10px;
  }
`;

export default Tile;
