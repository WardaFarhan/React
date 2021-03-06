import React from 'react';
//import DishDetail from './DishdetailComponent';     upar vale ka part , { Component }
// import { Media } from 'reactstrap';
//import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


 /* class Menu extends Component {
    constructor(props) {
        super(props);
     this.state = {
          selecteddish:null
        };
      } */
    

 /* these two statements r now shifted to maincomponent.js

  onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }
*/
  
  /*  renderDish(dish) {
        if (dish != null)
            return <DishDetail dish={this.state.selectedDish} />
        else
            return(
                <div></div>
            );
    }
*/

 /*   render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className= "col-12 col-md-5 m-1" >
               <Card  onClick={() => this.props.onClick(dish.id)} >
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
             {menu}
            </div>
           
                </div>
        );
    }
}

export default Menu;
*/

/*
inside card command
 onClick={() => this.onDishSelect(dish)}


The following code is replaced by card in render()

<Media tag="li">
<Media left middle>
    <Media object src={dish.image} alt={dish.name} />
</Media>
<Media body className="ml-5">
  <Media heading>{dish.name}</Media>
  <p>{dish.description}</p>
</Media>
</Media>

from return function
<Media list>
                  {menu}
              </Media>
 
  from renderDish(dish)  function

frm last return function
 <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
*/

function RenderMenuItem ({ dish, onClick }) {
    
    if(dish!=null)

{
  return (
      <Card>
          <Link to={`/menu/${dish.id}`} >
                 <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
      </Card>
  )
};
}
// below is another way to implement properties

const Menu = (props) => {

    const menu = props.dishes.dishes.map((dish) => {
    return (
          <div className="col-12 col-md-5 m-1"  key={dish.id}>
              <RenderMenuItem dish={dish}/>
          </div>
      ); 
     
  });
  if (props.dishes.isLoading) {
    return(
        <div className="container">
            <div className="row">            
                <Loading />
            </div>
        </div>
    );
    }
    else if (props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else
    return (
        <div className="container">
            <div className="row">
            <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;

/*  frm rendermenuitem function

, onClick  its inside the func parameters

<card 
          onClick={() => onClick(dish.id)}>

2nd last return rendermenuitem part

           onClick={props.onClick} 
*/