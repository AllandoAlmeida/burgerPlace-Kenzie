import React, { useState } from "react";
import { StyledHeader } from "./styles";
import { ButtonCountItens } from './../Buttons/ButtonCountItens';

export const Header = ({ callback, setModalOpen, setPurchaseList, purchaseList}) => {
  const [inputSearch, setInputSearch] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    callback(inputSearch);
  }
  return (
    <StyledHeader>
      <ButtonCountItens setModalOpen={setModalOpen} purchaseList={purchaseList} />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Buscar..." onChange={(event) => setInputSearch(event.target.value)} />
        <button type="submit">Buscar</button>
      </form>
    </StyledHeader>
  );
};
