import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";
import { HeaderTitle } from "../HeaderTitle";
import { IconContainer, PaymentButtonContainer, PaymentContainer } from "./styles";

export function Payment() {
  const {
    order,
    setPaymentMethod
  } = useContext(OrderContext)

  const [payment, setPayment] = useState<boolean>(false);

  let creditButton = false;
  let debitButton = false;
  let money = false;

  function loadPaymentButtons() {
    if (order.payment === 1) {
      creditButton = true;
      debitButton = false;
      money = false;
    }
    if (order.payment === 2) {
      creditButton = false;
      debitButton = true;
      money = false;
    }
    if (order.payment === 3) {
      creditButton = false;
      debitButton = false;
      money = true;
    } else {
      creditButton = false;
      debitButton = false;
      money = false;
    }
  }

  function handleChoosePaymentMethod(paymentId: number) {
    setPaymentMethod(paymentId);
  }

  return (
    <PaymentContainer>
      <HeaderTitle
        icon={<CurrencyDollar size={22} />}
        iconColor={'purple'}
        title={'Pagamento'}
        subtitle={'O pagamento é feito na entrega. Escolha a forma que deseja pagar'}
      />
      <div className="paymentButtons">
        <PaymentButtonContainer
          checked={creditButton}
          onClick={() => handleChoosePaymentMethod(1)}
        >
          <IconContainer iconColor={'purple'}>
            <CreditCard size={16} />
          </IconContainer>
          {'CARTÃO DE CRÉDITO'}
        </PaymentButtonContainer>

        <PaymentButtonContainer
          checked={debitButton}
          onClick={() => handleChoosePaymentMethod(2)}
        >
          <IconContainer iconColor={'purple'}>
            <Bank size={16} />
          </IconContainer>
          {'CARTÃO DE DÉBITO'}
        </PaymentButtonContainer>

        <PaymentButtonContainer
          checked={money}
          onClick={() => handleChoosePaymentMethod(3)}
        >
          <IconContainer iconColor={'purple'}>
            <Money size={16} />
          </IconContainer>
          {'DINHEIRO'}
        </PaymentButtonContainer>
      </div>
    </PaymentContainer>
  );
}