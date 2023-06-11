
import {ButtonWrapper, ItemCount, StyledCartIcon } from './styles'


export const ButtonCountItens = ({ setModalOpen, purchaseList }) => {
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  return (
    <ButtonWrapper>
      <button onClick={handleOpenModal}>
        <StyledCartIcon/>
      </button>
      <ItemCount>{purchaseList.length}</ItemCount>
    </ButtonWrapper>
  );
}

