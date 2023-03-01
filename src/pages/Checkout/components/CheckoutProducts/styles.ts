import styled from "styled-components";

export const CheckoutProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${props => props.theme['gray-100']};
  border-radius: 6px 44px;
  gap: 1.5rem;

  p.empty {
    text-align: center;
    font-family: 'Roboto';
    font-size: 18px;
    color: ${props => props.theme['gray-800']};
  }

  a {
    display: flex;
    text-decoration: none;
    cursor: pointer;
    
    button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
    }
  }
`;

export const ItemFromOrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  justify-content: space-between;
  
  .content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.25rem;

    p {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      color: ${props => props.theme['gray-800']};
    }

    img {
      width: 64px;
      height: 64px;
    }

    .item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .buttons {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
    }
  }
  
  .price {
    font-weight: 700;
    font-size: 16px;
    text-align: right;
  }

`;

export const Divider = styled.hr`
  border-top: 1px solid ${props => props.theme['gray-400']};
  /* margin: 1.5rem 0; */
`;

export const PricesInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  

  .orderInfo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;

    p {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      text-align: right;
    }
  }

  .total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    font-family: 'Roboto';
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;

    p {
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;
      text-align: right;
    }
  }
`;

export const ActionButton = styled.button`
  display: block;
  border-radius: 6px;
  color: ${props => props.theme['white']};
  background: ${props => props.theme['yellow-500']};
  padding: 0.75rem;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  line-height: 130%;
  text-align: center;

  &:hover {
    background: ${props => props.theme['yellow-700']};
  }

  &:disabled{
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const TrashButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: ${props => props.theme['gray-400']};
  border-radius: 6px;
  gap: 4px;
  width: 100%;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  
  span {
    display: flex;
    padding: 0;
    color: ${props => props.theme['purple-500']};

    &:hover {
      color: ${props => props.theme['purple-700']};
    }
  }

  &:hover {
    color: ${props => props.theme['gray-800']};
    background: ${props => props.theme['gray-500']};
  }
`;



