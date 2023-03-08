import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useParams } from "react-router-dom";
import { PAYMENTS } from "../../api-data/app-data";
import { getOrderById, OrderData } from "../../reducers/order-reducers";
import { Icon, IconTitleContainer, OrderConfirmationContainer, OrderInfoCard } from "./styles";

import motorcycle from '../../assets/man-motorcycle.svg';
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

export function OrderConfirmation() {
  const {
    orderState
  } = useContext(OrderContext)

  const { orderId } = useParams();

  let orderData: OrderData = getOrderById((orderId as string))!;

  const hasComplemento = orderData.address.complemento.length === 0;

  const paymentMethod = PAYMENTS.find(pay => pay.id === orderData.payment);

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
                {orderData.address.rua + ', ' + orderData.address.numero}
                {!hasComplemento && (', ' + orderData.address.complemento)}
              </strong>
              <p>{
                orderData.address.bairro + ' - '
                + orderData.address.cidade + ', '
                + orderData.address.uf
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
        <img src={motorcycle} alt="" />
      </div>
    </OrderConfirmationContainer>
  );
}