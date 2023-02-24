import { ReactElement } from "react";
import { IconContainer, PaymentButtonContainer } from "./styles";

interface PaymentButtonProps {
  icon: ReactElement;
  iconColor: any;
  text: string;
  isSelected: boolean;
}

export function PaymentButton({ icon, iconColor, text, isSelected }: PaymentButtonProps) {
  return (
    <PaymentButtonContainer checked={isSelected}>
      <IconContainer iconColor={iconColor}>
        {icon}
      </IconContainer>
      {text}
    </PaymentButtonContainer>
  );
}