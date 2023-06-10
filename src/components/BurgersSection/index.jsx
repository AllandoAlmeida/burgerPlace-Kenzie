import { BurgersList } from "./BurgersList"
import { StyledSection } from "./styles"

export const BurgersSection = ({burgers, setPurchaseList, purchaseList}) => {
    return(
        <StyledSection>
            <BurgersList burgers={burgers} setPurchaseList={setPurchaseList} purchaseList={purchaseList}/>
        </StyledSection>
    )
}