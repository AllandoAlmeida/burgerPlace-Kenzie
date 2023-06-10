import { useState } from "react";
import { StyleButtonDeleteAll } from "./styles";

export const ButtonDeletAll = ({ purchaseList, setPurchaseList }) => {
    const [selectedItems, setSelectedItems] = useState(purchaseList);
    const clearCart = () => {
        setSelectedItems([]);
        setPurchaseList([]); // Limpa o carrinho de compras
    };
    return(
        <>
        <StyleButtonDeleteAll onClick={clearCart}>Remover Todos</StyleButtonDeleteAll>
        </>
    )
}