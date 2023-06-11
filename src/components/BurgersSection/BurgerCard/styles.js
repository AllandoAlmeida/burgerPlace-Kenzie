import styled from "styled-components";

export const StylesCard = styled.ul`
  width: 300px;
  height: 346px;
  margin: 25px 0;
  border: 2px solid var(--color-grey-100);
  border-radius: 5px;

  .contanierImage {
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-img);

    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      object-position: center;
    }
  }
  .contanierContent {
    display: flex;
    flex-direction: column;
    margin: 8%;
    gap: 15px;

    li:nth-child(1) {
      font-size: 18px;
      font-weight: bold;
      line-height: 1.875rem;
      color: var(--color-grey-600);
    }
    li:nth-child(2) {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.375rem;
      color: var(--color-grey-300);
    }
    li:nth-child(3) {
      font-size: 14px;
      font-weight: 600;
      line-height: 1.375rem;
      color: var(--color-color-primary);
    }
  }
`;

export const StyledLi = styled.li`
  list-style-type: none;
`;
