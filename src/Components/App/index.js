import React, { Component } from "react";
import OrderContainer from "../OrderContainer";
import Menu from "../Menu";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayOfBirds: [
                {
                    imageUrl: "",
                    name: "Transylvania Naked Neck",
                    age: "3 months",
                    sex: "female",
                    weight: "4kg",
                    price: "65.99",
                    origin: "Romania",
                    stock: "2",
                    id: "999" // use getshort id.
                }
            ],
            order: [[999, 2, "Transylvania naked neck", "65.99"]]
        };
    }

    // addToOrder(){
    //   return
    //   /// get id of bird based on button click
    //   // create array with [stock, price, name, id]
    //   // setState({order})
    //   // send this id and relevant data to order
    // }

    render() {
        return (
            <div className="App">
                <header className="App-header" />
                <Menu />
                <OrderContainer order={this.state.order} />
            </div>
        );
    }
}

export default App;
