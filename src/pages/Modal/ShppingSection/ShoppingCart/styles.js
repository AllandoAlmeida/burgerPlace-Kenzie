import styled from "styled-components";

export const CartSection = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 45.3rem;
  height: 8rem;
  margin: 1.8rem auto;

  li:nth-child(1) {
    display: flex;
    gap: 1rem;
    height: 8rem;
    list-style-type: none;
    flex-wrap: wrap;

    figure {
      background-color: var(--color-grey-100);
      width: 8.3rem;
      height: 8rem;
      padding: 1.3rem;
      border-radius: 0.5rem;
    }

    img {
      width: 5.5rem;
      height: 5.4rem;
    }
  }
  li:nth-child(2) {
    list-style-type: none;
  }
`;
