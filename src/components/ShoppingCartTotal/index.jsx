import { ButtonDeletAll } from '../Buttons/ButtonDeleleAll';
import { StyledHeadline3 } from '../../styles/Typography'
import { StyleCartTotal } from './styles';


export const ShoppingCartTotal = ({ purchaseList, setPurchaseList }) => {

    const expensesValue = purchaseList.reduce((acc, purchase) => {
        const cartTotal = parseFloat(purchase.price);
        return acc + cartTotal
    }, 0);
    const formattedValue = expensesValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    const displayValue = expensesValue < 0 ? `(${formattedValue})` : formattedValue;


    return (
        <>
            <StyleCartTotal>
                <StyledHeadline3 className='title'>Total {" "}</StyledHeadline3>
                <StyledHeadline3>{displayValue}</StyledHeadline3>
            </StyleCartTotal>
            <ButtonDeletAll purchaseList={purchaseList} setPurchaseList={setPurchaseList} />
        </>
    )
}