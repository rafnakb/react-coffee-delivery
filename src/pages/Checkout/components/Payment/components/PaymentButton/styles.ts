import styled from "styled-components";

interface PaymentButtonProps {
  checked: boolean;
}

export const PaymentButtonContainer = styled.button<PaymentButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  border-radius: 6px;
  gap: 0.75rem;
  color: ${props => props.theme['gray-700']};

  color: ${props => props.checked ? (props.theme['gray-700']):(props.theme['gray-800'])};
  background: ${props => props.checked ? (props.theme['purple-300']):(props.theme['gray-400'])};
  border: 1px solid ${props => props.checked ? (props.theme['purple-500']):('transparent')};

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;

  &:hover {
    color: ${props => props.checked ? (props.theme['gray-700']):(props.theme['gray-800'])};
    background: ${props => props.checked ? (props.theme['purple-300']):(props.theme['gray-500'])};
  }
`;

const ICON_COLOR = {
  yellowDark: 'yellow-700',
  purple: 'purple-500'
} as const;

interface IconProps {
  iconColor: keyof typeof ICON_COLOR;
}

export const IconContainer = styled.span<IconProps>`
  display: flex;
  color: ${props => props.theme[ICON_COLOR[props.iconColor]]};
`;