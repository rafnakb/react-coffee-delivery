import { NoteBlank } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteOrderListFromStorage, getAllOrderFromStorage, OrderData } from "../../reducers/order-reducers";
import { formatCoinToBrazil } from "../../utils/text-formatter";
import { ClearButton, EmptyContainer, OrderListContainer, OrderTable } from "./styles";

export function OrderList() {
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState<OrderData[]>([]);

  useEffect(() => {
    setOrderList(getAllOrderFromStorage());
  }, [orderList])

  function handleGetOrderId(orderId: string) {
    navigate(`/order-confirmation/${orderId}`);
  }

  function handleDeleteOrderList() {
    deleteOrderListFromStorage();
    setOrderList([]);
  }

  const isOrderListEmpty = orderList.length === 0;

  return (
    <OrderListContainer>
      <h1>Lista de Pedidos</h1>
      {isOrderListEmpty ? (
        <EmptyContainer>
          <hr />
          <NoteBlank size={44} />
          <span>Sua lista está vazia.</span>
        </EmptyContainer>
      ) : (
        <>
          <p>{'Total de ' + orderList.length + ' pedido(s).'}</p>
          <OrderTable>
            <table id="orderTable">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Cidade</th>
                  <th>Estado</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map(order => {
                  return (
                    <tr key={order.id} onClick={() => handleGetOrderId(order.id)}>
                      <td>{order.id}</td>
                      <td>{order.address.cidade}</td>
                      <td>{order.address.uf}</td>
                      <td>{formatCoinToBrazil(order.totalPrice)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </OrderTable>
          <ClearButton onClick={handleDeleteOrderList}>
            Limpar lista de pedidos
          </ClearButton>
        </>
      )}

    </OrderListContainer>
  );
}