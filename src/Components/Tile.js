import styled from "styled-components";

const Tile = styled.span`
  background-color: ${({ active }) =>
    active ? "var(--default)" : "var(--grey-3)"};
  color: ${({ active }) => (active ? "#ffffff" : "#000000")};
  transition: ease all 0.25s;
  display: inline-block;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  padding: 22px;
`;

export default Tile;
