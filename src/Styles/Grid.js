import styled from "styled-components";

const Grid = styled.div`
  width: 100%;
  display: grid;
  gap: ${({ gap }) => gap || "32px"};
  grid-template-columns: ${({ sm }) => sm || "auto"};

  @media (min-width: 768px) {
    grid-template-columns: ${({ sm, md }) => md || sm || "auto"};
  }

  @media (min-width: 992px) {
    grid-template-columns: ${({ sm, md, lg }) => lg || md || sm || "auto"};
  }

  @media (min-width: 1200px) {
    grid-template-columns: ${({ sm, md, lg, xl }) =>
      xl || lg || md || sm || "auto"};
  }
`;

export default Grid;
