import { ReactElement } from "react";
import { HeaderContainer, IconContainer, SubtitleAndText } from "./styles";

interface HeaderTitleProps {
  icon: ReactElement;
  iconColor: any;
  title: string;
  subtitle: string;
}

export function HeaderTitle({ icon, iconColor, title, subtitle }: HeaderTitleProps) {
  return (
    <HeaderContainer>
      <IconContainer iconColor={iconColor}>
        {icon}
      </IconContainer>
      <SubtitleAndText>
        {title}
        <p>{subtitle}</p>
      </SubtitleAndText>
    </HeaderContainer>
  );
}