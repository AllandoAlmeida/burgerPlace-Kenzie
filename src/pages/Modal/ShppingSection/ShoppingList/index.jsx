
import { ShoppingCart } from '../ShoppingCart';
import React  from 'react';
import { StyledModalList } from './styles';

export const ShoppingList = ({ purchaseList, setPurchaseList, handleShowToast}) => {

  const handleRemove = (purchaseId) => {
    let colorClass = '';
    let text = '';

    if (confirm('Confirma a exclusão desse item?')) {
      colorClass = '#168821';
      text = 'Produto excluído com sucesso';
      setPurchaseList((prevPurchaseList) =>
        prevPurchaseList.filter((purchase) => purchase.id !== purchaseId)
      );
    }

    handleShowToast(colorClass, text);
  };


  return (
    <StyledModalList>
      {purchaseList.map((purchase) => (
        <ShoppingCart key={purchase.id} purchase={purchase} handleRemove={handleRemove} handleShowToast={handleShowToast} />
      ))}
    </StyledModalList>
  );
};
