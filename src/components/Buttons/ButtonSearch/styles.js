import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const StyledButtonSearch = styled.button`
  width: 5.3rem;
  height: 4rem;
  background-color: var(--color-color-primary);
  border: 0.2rem solid var(--color-color-primary);
  border-radius: 0.8rem;
`;
export const StyledSearchIcon = styled(BsSearch)`
  width: 1.3rem;
  height: 1.6rem;

  font-family: "Font Awesome 5 Free";
  font-style: normal;
  font-weight: 900;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: var(--color-white);
`;
