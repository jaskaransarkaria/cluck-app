import React, { Component } from "react";
import Menu from "../Menu";

// import '../Order'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayOfBirds: [
                {
                    imageUrl: "",
                    name: "",
                    age: "",
                    sex: "",
                    weight: "",
                    price: "",
                    origin: "",
                    stock: "",
                    id: "" // use getshort id.
                }
            ],
            order: []
        };
    }

    addToOrder() {
        return;
        /// get id of bird based on button click
        // create array with [stock, price, name, id]
        // setState({order})
        // send this id and relevant data to order
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Menu />
                </header>
                {/* <Menu /> */}
            </div>
        );
    }
}

export default App;
