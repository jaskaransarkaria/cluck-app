import React, { Component } from "react";
import OrderContainer from "../OrderContainer";
import Menu from "../Menu";

class App extends Component {
<<<<<<< Updated upstream
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
||||||| merged common ancestors
  constructor(props) {
    super(props);
    this.state = {
      arrayOfBirds: [
        {
          id: 999,
          imageUrl: "",
          name: "Transylvania Naked Neck",
          age: "3 months",
          sex: "female",
          weight: "4kg",
          price: "65.99",
          origin: "Romania",
          stock: "2"
        }
      ],
      order: [[999, 2, "Transylvania naked neck", "65.99"]]
    };
  }

  addToOrder = ids => {
    if (!ids) return;
    const birdList = this.state.arrayOfBirds;
    let obj = birdList.find(objItem => {
      return objItem.id === ids;
    });
    if (obj === undefined) {
      return;
    } else {
      let orderArray = [obj, obj.stock, obj.name, obj.price];
      this.setState({ order: [...this.state.order, orderArray] });
      return;
=======
  constructor(props) {
    super(props);
    this.state = {
      arrayOfBirds: [
        {
          id: 999,
          imageUrl: "",
          name: "Transylvania Naked Neck",
          age: "3 months",
          sex: "female",
          weight: "4kg",
          price: "65.99",
          origin: "Romania",
          stock: "2"
        }
      ],
      order: [[999, 2, "Transylvania naked neck", "65.99"]]
    };
  }

  addToOrder = ids => {
    const birdList = this.state.arrayOfBirds;
    let obj = birdList.find(objItem => {
      return objItem.id === ids;
    });
    if (obj === undefined) {
      return;
    } else {
      let orderArray = [obj, obj.stock, obj.name, obj.price];
      this.setState({ order: [...this.state.order, orderArray] });
      return;
>>>>>>> Stashed changes
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
