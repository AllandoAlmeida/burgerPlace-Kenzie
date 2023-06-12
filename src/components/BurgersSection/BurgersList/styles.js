import styled from "styled-components";

export const ContainerList = styled.div`
  display: flex;
  gap: 3.125rem;
  margin: 1.25rem;
  overflow: hidden;
  overflow-x: scroll;

  @media screen and (min-width: 48rem) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4%;
    width: 100%;
    max-width: 83%;
    margin: 2rem auto 0.9375rem;
    overflow: hidden;
  }
`;
