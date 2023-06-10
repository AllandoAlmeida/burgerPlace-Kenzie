import { MdDelete } from 'react-icons/md';
import { StyleButtonDelete } from './styles';

export const ButtonDeleteItem = ({ purchase, handleRemove }) => {
    return(
        <StyleButtonDelete type='submit' onClick={() => handleRemove(purchase.id)}>
          <MdDelete />
        </StyleButtonDelete>
    )
}