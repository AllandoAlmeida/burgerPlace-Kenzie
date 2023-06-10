import { ShoppingCart } from '../ShoppingCart';
import React, { useEffect } from 'react';
import { StyledModalList } from './styles';

export const ShoppingList = ({ purchaseList, setPurchaseList }) => {
  const handleRemove = (purchaseId) => {
    if (confirm('Confirma a exclusão desse item?')) {
      setPurchaseList((prevPurchaseList) =>
        prevPurchaseList.filter((purchase) => purchase.id !== purchaseId)
      );
      
    }
  };

  useEffect(() => {
    
  }, [handleRemove]);

  return (
    <StyledModalList>
      {purchaseList.map((purchase) => (
        <ShoppingCart key={purchase.id} purchase={purchase} handleRemove={handleRemove} />
      ))}
    </StyledModalList>
  );
};
