import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { HeaderTitle } from "../HeaderTitle";
import { PaymentButton } from "./components/PaymentButton";
import { PaymentContainer } from "./styles";

export function Payment() {

  return (
    <PaymentContainer>
      <HeaderTitle
        icon={<CurrencyDollar size={22} />}
        iconColor={'purple'}
        title={'Pagamento'}
        subtitle={'O pagamento é feito na entrega. Escolha a forma que deseja pagar'}
      />
      <div className="paymentButtons">
        <PaymentButton
          icon={<CreditCard size={16} />}
          iconColor='purple'
          text={'CARTÃO DE CRÉDITO'}
          isSelected={true}
        />
        <PaymentButton
          icon={<Bank size={16} />}
          iconColor='purple'
          text={'CARTÃO DE DÉBITO'}
          isSelected={false}
        />
        <PaymentButton
          icon={<Money size={16} />}
          iconColor='purple'
          text={'DINHEIRO'}
          isSelected={false}
        />
      </div>
    </PaymentContainer>
  );
}