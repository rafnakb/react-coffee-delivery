import { MapPinLine } from "phosphor-react";
import { AddressContainer, CheckoutContainer, FormContainer, Icon, Input, PaymentContainer, ProductsSelectedContainer, SubtitleAndText } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <span>Complete seu pedido</span>
      <span>Cafés selecionados</span>

      <AddressContainer>
        <header>
          <Icon iconColor="yellowDark">
            <MapPinLine size={22} />
          </Icon>
          <SubtitleAndText>
            Endereço de Entrega
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </SubtitleAndText>
        </header>

        <FormContainer>
          <div>
            <Input type="text" placeholder="CEP" />
          </div>
          <div>
            <Input type="text" placeholder="Rua" />
          </div>
          <div>
            <Input type="text" placeholder="Número" />
            <Input type="text" placeholder="Complemento" />
          </div>
          <div>
            <Input type="text" placeholder="Bairro" />
            <Input type="text" placeholder="Cidade" />
            <Input type="text" placeholder="UF" />
          </div>
        </FormContainer>
      </AddressContainer>

      <ProductsSelectedContainer>

      </ProductsSelectedContainer>

      <PaymentContainer>

      </PaymentContainer>

    </CheckoutContainer>
  );
}