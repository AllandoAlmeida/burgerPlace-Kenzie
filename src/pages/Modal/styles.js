import styled from "styled-components";

export const ModalSection = styled.section`
  position: fixed;
  width: 95%;
  max-width: 500px;
  height: max-content;
  min-height: 400px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-white);
  border: 1px solid #F5F5F5;
  border-radius: 5px;
  margin: 0 1%;

  header {
    width: 100%;
    max-width: 500px;
    background-color: var(--color-color-primary);
    color: var(--color-white);
    padding: 0 1%;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 54px;
      flex-wrap:wrap;

      button {
        display: flex;
        align-items: center;
        flex-wrap:wrap;
        width: 14px;
        height: 24px;
        background-color: var(--color-color-primary);
        color: var(--color-white);
        border: none;
      }
    }
  }


`
