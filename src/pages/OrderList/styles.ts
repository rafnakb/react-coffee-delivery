import styled from "styled-components";

export const OrderListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  width: 800px;
  margin: 0 auto;
  gap: 1rem;
  
  h1 {
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 20px;
    text-align: center;
  }

`;

export const Divider = styled.hr`
  width: 100%;
  border-top: 1px solid ${props => props.theme['gray-400']};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme['gray-400']};
  border: 1px solid ${props => props.theme['gray-500']};
  height: 3rem;
  width: 100%;
  border-radius: 6px;
`;