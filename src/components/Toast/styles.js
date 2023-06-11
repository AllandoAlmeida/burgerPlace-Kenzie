import styled from 'styled-components';

export const ToastContainer = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;

  border: 1px solid;
  color: #fff;

  width: 200px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: ${props => props.color || '#e60000'}; // Define a cor padrão
  animation: fadeInOut 1s ease-in-out;

  &.toast__fadeOut {
    animation: fadeOut 1s linear forwards;
  }

  &.hidden {
    display: none;
  }

  @keyframes fadeInOut {
    0% {
      transform: translateY(100%);
      opacity: 0;
      background-color: rgba(255, 255, 255, 0.5);
    }

    30% {
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.5);
    }

    70% {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.5);
    }

    100% {
      transform: translateY(0);
      opacity: 0;
      background-color: rgba(0, 0, 0, 0);
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  

}
`;
