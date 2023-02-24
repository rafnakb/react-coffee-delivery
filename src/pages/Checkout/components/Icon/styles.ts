import styled from "styled-components";

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