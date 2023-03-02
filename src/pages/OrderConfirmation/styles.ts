import styled from "styled-components";

export const OrderConfirmationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  width: var(--contentSize);
  margin: 0 auto;
  padding-top: 2.5rem;

  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 32px;
  color: ${props => props.theme['yellow-700']};

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: ${props => props.theme['gray-800']};
  }

  .infoBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 102px;
    padding-top: 2.5rem;
  }

  .infoText {
    flex-direction: column;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 20.8px;
    color: ${props => props.theme['gray-700']};

    p {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      line-height: 20.8px;
    }
  }
`;

export const OrderInfoCard = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 32.875rem;
  gap: 2rem;
  padding: 2.5rem;
  background: linear-gradient(#FAFAFA, #FAFAFA) padding-box,
              linear-gradient(to right, #DBAC2C, #8047F8) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
`;

export const IconTitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.75rem;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 20.8px;
  color: ${props => props.theme['gray-700']};
`;

const ICON_COLORS = {
  yellowDark: 'yellow-700',
  grayBase: 'gray-700',
  yellow: 'yellow-500',
  purple: 'purple-500'
} as const;

interface IconColor {
  iconColor: keyof typeof ICON_COLORS;
}

export const Icon = styled.span<IconColor>`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 999px;
  color: ${props => props.theme['white-100']};
  background: ${props => props.theme[ICON_COLORS[props.iconColor]]};
`;