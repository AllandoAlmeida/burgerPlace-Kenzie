import styled from "styled-components";

export const StylesCard = styled.ul`
  width: 30rem;
  min-width: 25rem;
  height: 34rem;
  margin: 2.5rem 0;
  border: .20rem solid var(--color-grey-100);
  border-radius: 5px;

  :hover{
    border: .20rem solid var(--color-color-primary)
  }

  .contanierImage {
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-img);

    img {
      width: 15rem;
      height: 15rem;
      object-fit: cover;
      object-position: center;
    }
  }
  .contanierContent {
    display: flex;
    flex-direction: column;
    margin: 8%;
    gap: 1.5rem;

    li:nth-child(1) {
      font-size: 1.8rem;
      font-weight: bold;
      line-height: 1.875rem;
      color: var(--color-grey-600);
    }
    li:nth-child(2) {
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.375rem;
      color: var(--color-grey-300);
    }
    li:nth-child(3) {
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.375rem;
      color: var(--color-color-primary);
    }
  }
`;

export const StyledLi = styled.li`
  list-style-type: none;
`;
