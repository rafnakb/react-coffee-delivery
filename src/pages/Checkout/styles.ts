import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: grid;
  max-width: var(--contentSize);
  margin: 0 auto;
  grid-template-columns: 40rem 28rem;
  gap: 0.75rem 2rem;
  padding-top: 2.5rem;
  align-items: flex-start;

  font-family: 'Baloo 2';
  font-size: 18px;
  font-weight: 700;
`;

export const SubtitleAndText = styled.div`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: ${props => props.theme['gray-800']};

  p {
    font-weight: 400;
    font-size: 14px;
    color: ${props => props.theme['gray-700']};
  }
`;

const ICON_COLOR = {
  yellowDark: 'yellow-700',
  purple: 'purple-500'
} as const;

interface IconProps {
  iconColor: keyof typeof ICON_COLOR;
}

export const Icon = styled.span<IconProps>`
  color: ${props => props.theme[ICON_COLOR[props.iconColor]]};
`;

const BaseInput = styled.input`
  background: ${props => props.theme['gray-400']};
  border: 0;
  padding: 0.75rem;
  border-radius: 4px;
  color: ${props => props.theme['gray-700']};

  &:focus {
    border: 1px solid ${props => props.theme['yellow-700']};
  }

  &::placeholder {
    color: ${props => props.theme['gray-600']};
  }
`;

export const Input = styled(BaseInput)`
  flex: 1;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    gap: 1rem;
  }

  input {
    width: 100%;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  background: ${props => props.theme['gray-100']};
  border-radius: 6px;
  gap: 2rem 0rem;

  header {
    display: flex;
    flex-direction: row;
    gap: 0 0.5rem;
  }

  span {
    color: ${props => props.theme['yellow-700']};
  }
`;

export const ProductsSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${props => props.theme['gray-100']};
  border-radius: 6px 44px;
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${props => props.theme['gray-100']};
  border-radius: 6px;
`;