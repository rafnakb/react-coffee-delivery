import styled from "styled-components";

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  background: ${props => props.theme['gray-400']};
  border-radius: 6px 36px 6px 36px;

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
    line-height: 26px;
    margin-top: 16px;
    margin-bottom: 8px;
    color: ${props => props.theme['gray-800']};
  }

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 18.2px;
    max-width: 216px;
    margin-bottom: 33px;
    text-align: center;
    color: ${props => props.theme['gray-600']};
  }
`;

export const TagBox = styled.span`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 10px;
  line-height: 130%;
  color: ${props => props.theme['yellow-700']};
  background: ${props => props.theme['yellow-300']};
  border-radius: 12px;
  padding: 6px 12px;
`;

export const BuyContainer = styled.div`
  
`;