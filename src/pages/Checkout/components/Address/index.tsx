import { MapPinLine } from "phosphor-react";
import { IconContainer } from "../Icon/styles";
import { AddressContainer, Column, FormContainer, Input, SubtitleAndText } from "./styles";

export function Address() {
  return (
    <AddressContainer>
      <header>
        <IconContainer iconColor="yellowDark">
          <MapPinLine size={22} />
        </IconContainer>
        <SubtitleAndText>
          Endereço de Entrega
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </SubtitleAndText>
      </header>

      <FormContainer>
        <div>
          <Column numGrid={39}>
            <Input type="text" placeholder="CEP" />
          </Column>
        </div>
        <div>
          <Column numGrid={100}>
            <Input type="text" placeholder="Rua" />
          </Column>
        </div>
        <div>
          <Column numGrid={40}>
            <Input type="text" placeholder="Número" />
          </Column>
          <Column numGrid={60}>
            <Input type="text" placeholder="Complemento" />
          </Column>
        </div>
        <div>
          <Column numGrid={42}>
            <Input type="text" placeholder="Bairro" />
          </Column>
          <Column numGrid={40}>
            <Input type="text" placeholder="Cidade" />
          </Column>
          <Column numGrid={20}>
            <Input type="text" placeholder="UF" />
          </Column>
        </div>
      </FormContainer>
    </AddressContainer>
  );
}