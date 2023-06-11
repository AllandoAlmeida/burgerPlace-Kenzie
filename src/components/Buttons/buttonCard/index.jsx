import { ButtonAddCard } from "./styles";

export const ButtonAddCar = ({ burger, shoppingList }) => {

  return (
    <>
      <ButtonAddCard type="button" onClick={shoppingList} >
        Adicionar
      </ButtonAddCard>
    </>
  );
};

