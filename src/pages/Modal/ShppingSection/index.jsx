import React, { useState } from 'react';
import { ShoppingList } from './ShoppingList';
import { EmptyCart } from '../../../components/EmptyCart';
import { ShoppingCartTotal } from '../../../components/ShoppingCartTotal';

export const ShoppingSection = ({ purchaseList, setPurchaseList, handleShowToast }) => {

  return (
    <div>
      {purchaseList.length > 0 ? (
        <>
          <ShoppingList
            purchaseList={purchaseList}
            setPurchaseList={setPurchaseList}
            handleShowToast={handleShowToast}
          />
          <ShoppingCartTotal
            purchaseList={purchaseList}
            setPurchaseList={setPurchaseList}
          />

        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}