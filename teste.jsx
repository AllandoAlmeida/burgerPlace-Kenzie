import React, { useState, useEffect } from 'react';
import { StyledLi, StylesCard } from './styles';
import { ButtonAddCar } from '../../Buttons/buttonCard/index';
import { Toast } from '../../Toast';

export const BurgerCard = ({ burger, setPurchaseList, purchaseList }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastColor, setToastColor] = useState('');
  const [toastText, setToastText] = useState('');

  const shoppingList = () => {
    const itemExists = purchaseList.find((item) => item.id === burger.id);
    let colorClass = '';
    let text = '';

    if (itemExists) {
      colorClass = '#e60000'; // Defina a cor de erro
      text = 'O produto já foi adicionado ao carrinho.';
    } else {
      setPurchaseList([...purchaseList, burger]);
      colorClass = '#168821'; // Defina a cor de sucesso
      text = 'Produto adicionado com sucesso!';
    }

    setToastColor(colorClass);
    setToastText(text);
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showToast]);

  const formattedValue = burger.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <StylesCard>
      <StyledLi className="contanierImage">
        <img src={burger.img} alt="" />
      </StyledLi>
      <ul className="contanierContent">
        <StyledLi className="title">{burger.name}</StyledLi>
        <StyledLi className="category">{burger.category}</StyledLi>
        <StyledLi className="price">{formattedValue}</StyledLi>
        <ButtonAddCar shoppingList={shoppingList} />
      </ul>
      {showToast && (
        <Toast colorClass={toastColor} text={toastText} />
      )}
    </StylesCard>
  );
};
