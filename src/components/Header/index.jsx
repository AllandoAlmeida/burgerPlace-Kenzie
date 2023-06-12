import React, { useState } from 'react';
import { StyledDivImage, StyledDivInput, StyledHeader } from './styles';
import { ButtonCountItens } from './../Buttons/ButtonCountItens';
import logoKenzie from './../../assets/logoKenzie.svg'
import { ButtonSearch } from '../Buttons/ButtonSearch';

export const Header = ({ callback, setModalOpen, setPurchaseList, purchaseList }) => {
  const [inputSearch, setInputSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    callback(inputSearch);
    setInputSearch("");
  }

  return (
    <StyledHeader>
      <StyledDivImage>
        <img src={logoKenzie} alt='LogoTipo da Kenzie' />
        <ButtonCountItens setModalOpen={setModalOpen} purchaseList={purchaseList} />
      </StyledDivImage>
      <StyledDivInput>
        <form onSubmit={handleSubmit}>
          <p>
            <input type="text" placeholder="Digitar Pesquisa" value={inputSearch} onChange={(event) => setInputSearch(event.target.value)} />
            <ButtonSearch />
          </p>
        </form>
      </StyledDivInput>
    </StyledHeader>
  );
};
