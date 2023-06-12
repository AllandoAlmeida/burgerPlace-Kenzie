import styled from "styled-components";

export const ButtonAddCard = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 10.5rem;
  height: 4rem;
  border-radius: 0.8rem;
  border: none;
  background-color: var(--color-button);
  color: var(--color-white);

  :hover {
    background-color: var(--color-color-primary);
  }
`;
