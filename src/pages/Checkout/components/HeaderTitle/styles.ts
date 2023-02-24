import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
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

export const IconContainer = styled.span<IconProps>`
  color: ${props => props.theme[ICON_COLOR[props.iconColor]]};
`;