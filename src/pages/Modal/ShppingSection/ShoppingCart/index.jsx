
import { ButtonDeleteItem } from '../../../../components/Buttons/ButtonDeleteItem';
import { CartSection } from './styles';
import { StyleTitleBold3 } from '../../../../styles/Typography';


export const ShoppingCart = ({ purchase, handleRemove }) => {
  return (
    <CartSection>
      <li>
        <figure>
          <img src={purchase.img} alt='' />
        </figure>
        <StyleTitleBold3>{purchase.name}</StyleTitleBold3>
      </li>
      <li>
        <ButtonDeleteItem
          purchase={purchase}
          handleRemove={handleRemove}
        />

      </li>
    </CartSection>
  );
};
