import React, { Component } from 'react';
import DishDetail from './Dishdetail';
// import { Media } from 'reactstrap';

import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selecteddish:null
        };
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

  
    renderDish(dish) {
        if (dish != null)
            return <DishDetail dish={this.state.selectedDish} />
        else
            return(
                <div></div>
            );
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className= "col-12 col-md-5 m-1" >
               <Card onClick={() => this.onDishSelect(dish)}>
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
            <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div>
          </div>
        );
    }
}

export default Menu;


/* The following code is replaced by card in render()

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

<Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
*/