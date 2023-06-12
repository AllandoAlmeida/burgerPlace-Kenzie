import { BsCart3 } from "react-icons/bs";
import styled from "styled-components";

export const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;

  button {
    border: none;
  }
`;

export const StyledCartIcon = styled(BsCart3)`
  background-color: var(--color-white);
  font-size: 2.4rem;
  border: var(--color-white);
`;

export const ItemCount = styled.span`
  position: absolute;
  top: -1.5rem;
  right: -1rem;
  background-color: var(--color-color-primary);
  color: white;
  font-size: 1.2rem;
  width: 2rem;
  height: 2.4rem;
  border-radius: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
