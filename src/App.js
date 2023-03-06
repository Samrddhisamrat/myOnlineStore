import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Chair',
          img: 'chair.jpg',
          desc: 'Very best of chairs',
          category: 'chairs',
          price: '48.99'
        },
        {
          id: 2,
          title: 'Table',
          img: 'table.jpg',
          desc: 'Superb family table',
          category: 'tables',
          price: '189.00'
        },
        {
          id: 3,
          title: 'Sofa',
          img: 'sofa.jpg',
          desc: 'Awesome sofa for best night relax',
          category: 'sofa',
          price: '589.00'
        },
        {
          id: 4,
          title: 'The Lamp',
          img: 'lamp.jpg',
          desc: 'Work or read under best cozy lamp',
          category: 'lamp',
          price: '75.00'
        },
        {
          id: 5,
          title: 'Armchair',
          img: 'armchair.jpg',
          desc: 'Reading and negotiations will pass unnoticed',
          category: 'armchairs',
          price: '250.00'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} onAdd={this.addToOrder}/>
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    this.setState({orders:[...this.state.orders, item]})
  }
}

export default App;
