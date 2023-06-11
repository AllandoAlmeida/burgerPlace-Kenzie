import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
	--color-color-primary: #27ae60;
	--color-color-secondary: #eb5757;
	--color-grey-600: #333333;
	--color-grey-300: #828282;
	--color-grey-100: #e0e0e0;
	--color-negative: #e60000;
	--color-warning: #ffcd07;
	--color-sucess: #168821;
  --color-white:#FFFFFF;
  --color-img: #F5F5F5;
  --color-button:#BDBDBD;

	--color-information: #155bcb;
    font-size: 62.5%;
    font-family: 'Inter', sans-serif;
}
* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body, html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background-attachment: fixed;
    color: var(--color-gray-100);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;