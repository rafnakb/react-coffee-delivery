import styled from "styled-components";

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${props => props.theme['gray-100']};
  border-radius: 6px;
  gap: 2rem 0rem;

  .paymentButtons {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  }

`;