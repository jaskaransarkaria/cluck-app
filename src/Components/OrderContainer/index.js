import React from "react";
import OrderItem from "../OrderItem";

/// how do we handle the order, it will be an array.
//  tally up the cost
/// check we have enough in stock
// [id, stock, name, price ]

const OrderContainer = props => {
  let total = 0;
  props.order.map(item => (total += parseInt(item[3])));
  return (
    <div>
      {props.order.map((item, index) => (
        <OrderItem
          stock={item[1]}
          price={item[3]}
          name={item[2]}
          id={item[0]}
          key={index}
        />
      ))}
      <div>£{total}</div>
    </div>
  );
};
export default OrderContainer;
