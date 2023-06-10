import React, { useState } from 'react';
import { ShoppingList } from './ShoppingList';
import { EmptyCart } from '../../../components/EmptyCart';
import { ShoppingCartTotal } from '../../../components/ShoppingCartTotal';

export const ShoppingSection = ({ purchaseList, setPurchaseList}) => {

  return (
    <div>
      {purchaseList.length > 0 ? (
        <div>
          <ShoppingList purchaseList={purchaseList} setPurchaseList={setPurchaseList} />
          <ShoppingCartTotal purchaseList={purchaseList} setPurchaseList={setPurchaseList}/>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}