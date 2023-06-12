import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: max-content;
  margin: 0 auto;
  position: sticky;
  padding: 0 5%;
  top: 0;
  background-color: var(--color-img);
`;

export const StyledDivImage = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin: 2.5rem 1.5rem 0;
  height: max-content;

  @media screen and (min-width: 1024px) {
    max-width: 65%;
  }

  img {
    width: 16rem;
    height: 4rem;
  }
`;

export const StyledDivInput = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  height: max-content;
  @media screen and (min-width: 10.24rem) {
    max-width: 36.5rem;
  }

  form {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    @media screen and (min-width: 1024px) {
      max-width: 36.5rem;
    }

    p {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 1rem;
      margin: 1rem 0;
      height: 60px;
      border: 0.2rem solid #e0e0e0;
      border-radius: 0.8rem;
      background-color: var(--color-white);
      :hover {
        border: 0.2rem solid var(--color-grey-600);
      }
    }

    input {
      width: 100%;
      height: 5rem;
      margin: 1rem;
      border: none;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
      @media screen and (min-width: 1024px) {
        max-width: 36.5rem;
      }

      :hover {
        width: 100%;
        height: 1.9rem;

        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem;
        color: #828282;
      }
    }

    input::placeholder {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
      color: #e0e0e0;
    }
  }
`;
