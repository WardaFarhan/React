import React, { Component } from 'react';
//import { Navbar, NavbarBrand } from 'reactstrap';
//import Menu from './components/MenuComponent';
import './App.css';
//import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

 /* class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
}

  render() {
    return (
     // <div className="App">
     <div>
       <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}
*/

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    );
  }
}


export default App;

/* import logo from './logo.svg'; 

<was placed under div classname="app">

<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<h1 className="App-title">Welcome to React</h1>
</header>
<p className="App-intro">
To get started, edit <code>src/App.js</code> and save to reload.
</p>
*/