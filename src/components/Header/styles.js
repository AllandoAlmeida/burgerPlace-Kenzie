import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  position: sticky;
  top: 15px;
  gap: 10px;
  `;

export const StyledDivInput = styled.div`
      display: flex;
      width: 100%;
      justify-content: space-around;
      
      align-items: center;
      border: 1px solid red;
  .search-container {
  }

  .input-wrapper {
  }

  #search-input {
    padding-right: 40px; /* Espaço para o botão */
  }

  .search-button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .cart-icon {
    margin-left: 10px; /* Ajuste a margem conforme necessário */
  }
`;
