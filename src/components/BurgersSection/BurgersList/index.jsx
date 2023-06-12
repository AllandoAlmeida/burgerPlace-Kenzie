import { BurgerCard } from '../BurgerCard';
import { ContainerList } from './styles';

export const BurgersList = ({ burgers, setPurchaseList, purchaseList }) => {
    if (!burgers || !Array.isArray(burgers)) {
        return;
    }

    return (
        <ContainerList>
            {burgers.map((burger) => (
                <BurgerCard
                    key={burger.id}
                    burger={burger}
                    burgers={burgers}
                    setPurchaseList={setPurchaseList}
                    purchaseList={purchaseList}
                />
            ))}
        </ContainerList>
    );
};
