import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  background: ${props => props.theme['gray-100']};
  border-radius: 6px 36px 6px 36px;
  padding: 0 20px 20px 20px;

  img {
    width: 120px;
    height: 120px;
    margin-top: calc(0px - (20px));
    margin-bottom: 12px;
  }

  p:first-of-type {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    margin-top: 16px;
    margin-bottom: 8px;
    color: ${props => props.theme['gray-800']};
  }

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    max-width: 216px;
    margin-bottom: 33px;
    text-align: center;
    color: ${props => props.theme['gray-600']};
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0 4px;

  span {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
    color: ${props => props.theme['yellow-700']};
    background: ${props => props.theme['yellow-300']};
    border-radius: 12px;
    padding: 6px 12px;
  }
`;

export const BuyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  
  div {
    display: flex;
    gap: 8px;
  }
`;

export const PriceBox = styled.label`

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  text-align: right;
  color: ${props => props.theme['gray-700']};

  span {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 24px;
    line-height: 130%;
    text-align: right;
    margin-left: 4px;
    color: ${props => props.theme['gray-700']};
  }
`;

export const OrderCountContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  align-items: center;
  height: 38px;
  gap: 0 4px;
  padding: 0 8px;
  border-radius: 6px;
  background: ${props => props.theme['gray-400']};

  span {
    width: 1.25rem;
    text-align: center;
    vertical-align: middle;
    background: transparent;
    border: none;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    color: ${props => props.theme['gray-900']};

    &::-webkit-inner-spin-button { 
      -webkit-appearance: none;
    }

    & { 
      -moz-appearance: textfield;
      appearance: textfield;
    }
  }

  button {
    align-items: center;
    background: transparent;
    padding: 0;
    width: 14px;
    height: 14px;
    color: ${props => props.theme['purple-500']};

    &:hover {
      color: ${props => props.theme['purple-700']};
    }
  }
`;

export const CartButton = styled.button`
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  padding: 8px;
  border-radius: 6px;
  color: ${props => props.theme['gray-100']};
  background: ${props => props.theme['purple-700']};

  &:hover {
    background: ${props => props.theme['purple-500']};
  }
`;