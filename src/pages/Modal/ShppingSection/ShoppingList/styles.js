import styled from "styled-components";

export const StyledModalList = styled.div`
  ${({ cardCount }) =>
    cardCount > 3
      ? `
    height: 31.875rem;
    overflow: hidden;
    overflow-y: scroll;
  `
      : `
    height: auto;
    overflow: visible;
    overflow-y: initial;
  `}
  margin: 2%.3rem;
  min-height: 17.5rempx;
`;
