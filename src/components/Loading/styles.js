import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  max-width: 40%;
  margin: 15px auto;

  font-family: "Roboto Condensed", sans-serif;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;

  .loader {
    position: relative;
    margin: auto;
    width: 40%;
    color: white;
    font-family: "Roboto Condensed", sans-serif;
    font-size: clamp(2px 100% 250%);
    background: linear-gradient(180deg, #222 0, #444 100%);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  }
  .loader::after {
    content: "";
    display: table;
    clear: both;
  }
  span {
    float: left;
    height: 100px;
    line-height: 120px;
    width: 5%;
  }

  .loader > span {
    border-left: 1px solid #444;
    border-right: 1px solid #222;
  }

  .covers {
    position: absolute;
    height: 100%;
    width: 40%;
  }

  .covers span {
    background: linear-gradient(180deg, white 0, #ddd 100%);
    animation: up 2s infinite;
  }

  @keyframes up {
    0% {
      margin-bottom: 0;
    }
    16% {
      margin-bottom: 100%;
      height: 20px;
    }
    50% {
      margin-bottom: 0;
    }
    100% {
      margin-bottom: 0;
    }
  }
  .covers span:nth-child(2) {
    animation-delay: 0.142857s;
  }
  .covers span:nth-child(3) {
    animation-delay: 0.285714s;
  }
  .covers span:nth-child(4) {
    animation-delay: 0.428571s;
  }
  .covers span:nth-child(5) {
    animation-delay: 0.571428s;
  }
  .covers span:nth-child(6) {
    animation-delay: 0.714285s;
  }
  .covers span:nth-child(7) {
    animation-delay: 0.857142s;
  } 
`;