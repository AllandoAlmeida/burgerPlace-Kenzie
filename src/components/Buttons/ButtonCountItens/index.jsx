import { BsCart3 } from 'react-icons/bs';


export const ButtonCountItens = ({setModalOpen, purchaseList}) => {
    const handleOpenModal = () => {
        setModalOpen(true);
      };
    return(
        <div>
        <button onClick={handleOpenModal}> {/* Adiciona o evento onClick para abrir o modal */}
          <BsCart3 />
        </button>

        <span>{purchaseList.length}</span>
      </div>
    )
}