import React from 'react';
import { ShoppingSection } from './ShppingSection';
import { ModalSection } from './styles';


export const Modal = ({ purchaseList, setModalOpen, setPurchaseList }) => {
    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <ModalSection>
            <div>
                <header>
                    <div>
                        <h3>Carrinho de Compras</h3>
                        <button onClick={handleCloseModal}>X</button>
                    </div>
                </header>
            </div>
            <div>
                <ShoppingSection purchaseList={purchaseList} setPurchaseList={setPurchaseList} />
            </div>

        </ModalSection>
    );
};