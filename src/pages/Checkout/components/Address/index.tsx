import { MapPinLine } from "phosphor-react";
import { HeaderTitle } from "../HeaderTitle";
import { IconContainer } from "../Icon/styles";
import { AddressContainer, Column, FormContainer, Input } from "./styles";

export function Address() {
  return (
    <AddressContainer>
      <HeaderTitle
        icon={<MapPinLine size={22} />}
        iconColor={'yellowDark'}
        title={'Endereço de Entrega'}
        subtitle={'Informe o endereço onde deseja receber seu pedido'}
      />
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