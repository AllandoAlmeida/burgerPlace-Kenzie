/* import React, { useState } from 'react';
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
 */

import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Feed } from './pages/Feed';
import { Modal } from './pages/Modal/index.jsx';
import { Toast } from './components/Toast';

export const App = () => {
  const [purchaseList, setPurchaseList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [toastColor, setToastColor] = useState('');
  const [toastText, setToastText] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleShowToast = (color, text) => {
    setToastColor(color);
    setToastText(text);
    setIsToastVisible(true);

    setTimeout(() => {
      setIsToastVisible(false);
    }, 3000);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <GlobalStyles />
      {modalOpen && (
        <Modal
          onClose={handleCloseModal}
          purchaseList={purchaseList}
          setModalOpen={setModalOpen}
          setPurchaseList={setPurchaseList}
          handleShowToast={handleShowToast}
        />
      )}

      <Feed
        purchaseList={purchaseList}
        setPurchaseList={setPurchaseList}
        setModalOpen={setModalOpen}
        handleShowToast={handleShowToast}
      />

      {isToastVisible && (
        <Toast colorClass={toastColor} text={toastText} isPositive={toastColor === '#168821'} />
      )}
    </>
  );
};
