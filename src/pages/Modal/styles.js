import styled from "styled-components";

export const ModalSection = styled.section`
  position: fixed;
  width: 95%;
  max-width: 50rem;
  height: max-content;
  min-height: 40rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-white);
  border: 0.1rem solid var(--color-grey-100);
  border-radius: 0.5rem;
  margin: 0 1%;

  header {
    width: 100%;
    max-width: 50rem;
    background-color: var(--color-color-primary);
    color: var(--color-white);
    padding: 0 2%;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 5.4rem;
      flex-wrap: wrap;

      button {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 1.4rem;
        height: 2.4rem;
        background-color: var(--color-color-primary);
        color: var(--color-white);
        border: none;
      }
    }
  }
`;
