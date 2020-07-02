import React, { Component } from 'react';
import Home from './HomeComponent';
//import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
       // selectedDish: null
    };
  }

  /*onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  } */

  render() {
    const HomePage = () => {
      return(
          <Home 
          />
      );
    }
    return (
      <div>
    
    <Header />
    <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
          </Switch>
      
        <Footer />
      </div>
    );
  }
}

export default Main;

/*  frm last return 

  <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar> */

         // <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
      //  <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />  both were part of <header/>