import React, { useState } from "react";
import { StyledDivImage, StyledDivInput, StyledHeader } from "./styles";
import { ButtonCountItens } from './../Buttons/ButtonCountItens';
import logoKenzie from './../../assets/logoKenzie.svg'
import { ButtonSearch } from "../Buttons/ButtonSearch";


export const Header = ({ callback, setModalOpen, setPurchaseList, purchaseList }) => {
  const [inputSearch, setInputSearch] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    callback(inputSearch);
  }
  return (
    <StyledHeader>
     
      <StyledDivImage>
        <img src={logoKenzie} alt="" />
        <ButtonCountItens setModalOpen={setModalOpen} purchaseList={purchaseList} />
      </StyledDivImage>

      <StyledDivInput>
        <form onSubmit={handleSubmit}>
          <p>
            <input type="text" placeholder="Digitar Pesquisa" onChange={(event) => setInputSearch(event.target.value)} />
            <ButtonSearch />
          </p>
        </form>
      </StyledDivInput>

     
    </StyledHeader>

  );
};
