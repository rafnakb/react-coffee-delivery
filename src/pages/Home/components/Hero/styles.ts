import styled from "styled-components";

export const HeroContaier = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.5rem;

  img {
    width: 476px;
    height: 360px;
  }
`;

export const LeftHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 231px 1fr;
  gap: 1.25rem 2.5rem;
`;

export const TitleContainer = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 48px;
    line-height: 62.4px;
    color: ${props => props.theme['gray-900']};
  }

  h3 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: ${props => props.theme['gray-800']};
  }
`;

export const IconTitleContainer = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.75rem;
  padding-top: 1.25rem;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 20.8px;
  color: ${props => props.theme['gray-700']};

  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
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