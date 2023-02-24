import { Trash } from "phosphor-react";
import { ReactElement } from "react";
import { IconTextButtonContainer } from "./styles";

export function IconTextButton() {
  return (
    <IconTextButtonContainer>
      <span><Trash size={16} /></span>
      REMOVER
    </IconTextButtonContainer>
  );
}