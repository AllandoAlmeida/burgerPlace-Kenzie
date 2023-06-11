import { BsCart3 } from 'react-icons/bs';
import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;

`;

export const StyledCartIcon = styled(BsCart3)`
  
  background-color: var(--color-white);
  font-size: 24px;
  border: var(--color-white);
`;

export const ItemCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color:var(--color-color-primary);
  color: white;
  font-size: 12px;
  width: 20px;
  height: 24px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`;