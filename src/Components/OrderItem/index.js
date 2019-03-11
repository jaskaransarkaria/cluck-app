import React from 'react'

/// display , name and perspective: 

const OrderItem = props =>{
    console.log(props)
    return(
        <p>
           1 x {props.name} - {props.price}
        </p>
    )
}

export default OrderItem;