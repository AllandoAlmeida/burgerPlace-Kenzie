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
  margin: 0 15px;
  @media screen and (min-width: 1024px) {
    max-width: 65%
  }

  img {
    width: 160px;
    height: 40px;
  }
`;

export const StyledDivInput = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  @media screen and (min-width: 1024px) {
    max-width: 365px;
  }

  form {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    @media screen and (min-width: 1024px) {
    max-width: 365px;
  }
    

  p {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    height: 60px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    background-color: var(--color-white);
    :hover {
      border: 2px solid var(--color-grey-600);
    }

   
  }

  input {
    width: 100%;
    height: 50px;
    margin: 10px;
    border: none;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    @media screen and (min-width: 1024px) {
      max-width: 365px;
  }

    :hover {
      width: 100%;
      height: 19px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #828282;
    }
  }

  input::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #e0e0e0;
  }

   }
 
`;
