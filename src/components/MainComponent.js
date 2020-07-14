import React, { Component } from 'react';
import Home from './HomeComponent';
//import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
//import { DISHES } from '../shared/dishes';
//import { COMMENTS } from '../shared/comments';
//import { PROMOTIONS } from '../shared/promotions';
//import { LEADERS } from '../shared/leaders';
//import { Switch, Route, Redirect } from 'react-router-dom';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import About from './AboutComponent';
import { addComment, fetchDishes } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}



const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}

});

class Main extends Component {

  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.fetchDishes();
  }

  render(){
    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            addComment={this.props.addComment} />
      );
    };

    return (
      <div>
        <Header />
        <div>
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} />
              <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
 
   /* this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
       // selectedDish: null
    };*/
  

  /*onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  } */

 /* render() {
    const HomePage = () => {
      return(
          <Home  dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    return (
      <div>
    
    <Header />
    <Switch>
              <Route path='/home' component={HomePage} />
              <Route path='/aboutus' component={() => <About leaders={this.state.leaders}/>} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={Contact} />} />
              <Redirect to="/home" />
          </Switch>
      
        <Footer />
      </div>
    );
  }
}

export default Main; */

/*  frm last return 

  <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar> */

         // <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
      //  <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />  both were part of <header/>