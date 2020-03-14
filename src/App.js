import React, { Component } from 'react';
import Header from './components/Header';
import Message from './components/Message';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Products from './components/Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />>
           <main id="mainContainer">
            <div className="container">
              <Products />
              <Message />
              <Cart />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    );
  }

}

export default App;
