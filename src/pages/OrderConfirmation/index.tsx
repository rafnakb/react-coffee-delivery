import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { PAYMENTS } from "../../api-data/app-data";
import { DeliveryAddress, OrderContext } from "../../contexts/OrderContext";
import { Icon, IconTitleContainer, OrderConfirmationContainer, OrderInfoCard } from "./styles";

export function OrderConfirmation() {
  const {
    order
  } = useContext(OrderContext);

  const hasComplemento = order.address.complemento.length === 0;

  const paymentMethod = PAYMENTS.find(pay => pay.id === order.payment);

  return (
    <OrderConfirmationContainer>
      Uhu! Pedido confirmado
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div className="infoBar">
        <OrderInfoCard>
          <IconTitleContainer>
            <Icon iconColor="purple">
              <MapPin size={16} weight="fill" />
            </Icon>
            <div className="infoText">
              Entrega em <strong>
                {order.address.rua + ', ' + order.address.numero}
                {!hasComplemento && (', ' + order.address.complemento)}
              </strong>
              <p>{
                order.address.bairro + ' - '
                + order.address.cidade + ', '
                + order.address.uf
              }</p>
            </div>
          </IconTitleContainer>
          <IconTitleContainer>
            <Icon iconColor="yellow">
              <Timer size={16} weight="fill" />
            </Icon>
            <div className="infoText">
              Previsão de entrega
              <div>
                <strong>20 min - 30 min</strong>
              </div>
            </div>
          </IconTitleContainer>
          <IconTitleContainer>
            <Icon iconColor="yellowDark">
              <CurrencyDollar size={16} weight="fill" />
            </Icon>
            <div className="infoText">
              Pagamento na entrega
              <div>
                <strong>{paymentMethod?.method}</strong>
              </div>
            </div>
          </IconTitleContainer>
        </OrderInfoCard>
        <img src="src/assets/man-motorcycle.svg" alt="" />
      </div>
    </OrderConfirmationContainer>
  );
}