import React, { Component } from 'react';
import logo from './logo.svg';
import OrderContainer from '../OrderContainer'
// import OrderItem from '../OrderItem'
;

class App extends Component {
  constructor(props){
    super(props)
    this.state={
     arrayOfBirds:[{
      imageUrl: "",
      name: "Transylvania Naked Neck",
      age: "3 months",
      sex: "female",
      weight: "4kg",
      price: "65.99",
      origin:"Romania",
      stock:"2",
      id: "999"// use getshort id.
    }],
      order: [[999, 2, "Transylvania naked neck", "65.99"]]
}
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      {/* <Menu />      */}
      <OrderContainer order={this.state.order}/>
       </div>

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
