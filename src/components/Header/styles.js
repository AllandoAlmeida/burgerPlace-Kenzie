import styled from "styled-components";

export const StyledHeader = styled.header`
display:flex;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  position: sticky;
  padding: 0 5%;
  top: 0;
  background-color: var(--color-img);

`;

export const StyledDivImage = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65%;
  align-items: center;
  margin: 0 15px;

  img {
    width: 160px;
    height: 40px;
  }
`;

export const StyledDivInput = styled.div`
  display: flex;
  width: 90%;
  max-width: 365px;
  align-items: center;
  justify-content: flex-end;

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
  }

  input {
    width: 100%;
    max-width: 365px;
    height: 50px;
    margin: 10px;
    border: none;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #e0e0e0;
  }

  form {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;
