import React, { useState } from 'react';
import { StyledLi, StylesCard } from './styles';
import { ButtonAddCar } from '../../Buttons/buttonCard/index';

export const BurgerCard = ({ burger, setPurchaseList, purchaseList }) => {
  const shoppingList = () => {
    const itemExists = purchaseList.find((item) => item.id === burger.id);
    if (itemExists) {
      alert('O produto já foi adicionado ao carrinho.');
      console.log(purchaseList);
    } else {
      setPurchaseList([...purchaseList, burger]);
      alert('Produto adicionado com sucesso!');
    }
  };

  const formattedValue = burger.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <StylesCard>
      <StyledLi className="contanierImage">
        <img src={burger.img} alt="" />
      </StyledLi>
      <StyledLi className="title">
        <figcaption>{burger.name}</figcaption>
      </StyledLi>
      <StyledLi className="category">{burger.category}</StyledLi>
      <StyledLi className="price">{formattedValue}</StyledLi>
      <ButtonAddCar shoppingList={shoppingList} />
    </StylesCard>
  );
};
