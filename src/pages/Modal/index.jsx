import { ShoppingSection } from './ShppingSection';
import { ModalSection } from './styles';
import { useOutClick } from '../../components/hooks/useOutClick';
import { useKeyDown } from '../../components/hooks/useKeyDown';


export const Modal = ({ purchaseList, setModalOpen, setPurchaseList, handleShowToast }) => {

    const modalRef = useOutClick(() => {
        setModalOpen(false);
    });

    const buttonRef = useKeyDown('Escape', (element) => {
        console.log(element)
        element.click();
    });


    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <ModalSection ref={modalRef}>
            <div >
                <header>
                    <div>
                        <h3>Carrinho de Compras</h3>
                        <button ref={buttonRef} onClick={handleCloseModal} >X</button>
                    </div>
                </header>
            </div>
            <div>
                <ShoppingSection
                    purchaseList={purchaseList}
                    setPurchaseList={setPurchaseList}
                    handleShowToast={handleShowToast}
                />
            </div>

        </ModalSection>
    );
};