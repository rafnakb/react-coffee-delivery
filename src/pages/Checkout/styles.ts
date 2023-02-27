import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: grid;
  width: var(--contentSize);
  margin: 0 auto;
  grid-template-columns: 40rem 1fr;
  gap: 0.75rem 2rem;
  padding-top: 2.5rem;
  align-items: flex-start;

  font-family: 'Baloo 2';
  font-size: 18px;
  font-weight: 700;

  .completeInfo{
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${props => props.theme['gray-100']};
  border-radius: 6px;
`;