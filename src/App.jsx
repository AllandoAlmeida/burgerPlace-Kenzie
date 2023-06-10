import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Feed } from './pages/Feed';
import { Modal } from './pages/Modal/index.jsx';

export const App = () => {
  const [purchaseList, setPurchaseList] = useState([]);
  console.log(purchaseList)
  const [modalOpen, setModalOpen] = useState(false);



  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <GlobalStyles />
      {modalOpen && <Modal onClose={handleCloseModal} purchaseList={purchaseList} setModalOpen={setModalOpen} setPurchaseList={setPurchaseList} />}

      <Feed purchaseList={purchaseList} setPurchaseList={setPurchaseList} setModalOpen={setModalOpen} />
    </>
  );
};
