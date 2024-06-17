import React from 'react';
import {
  OrdersBlock,
  OrdersItem,
  OrdersItemDate,
  OrdersItemStatus,
  OrdersItemTitle,
  OrdersList,
  OrdersTitle
} from './styled.ts';

const ProfileOrders :React.FC = () => {
  return (
    <OrdersBlock>
      <OrdersTitle>Заказы</OrdersTitle>
      <OrdersList>
        <OrdersItem>
          <OrdersItemTitle>Сантехник</OrdersItemTitle>
          <OrdersItemStatus>Активен</OrdersItemStatus>
          <OrdersItemDate>15.06.2024</OrdersItemDate>
        </OrdersItem>
      </OrdersList>
    </OrdersBlock>
  );
};

export default ProfileOrders;