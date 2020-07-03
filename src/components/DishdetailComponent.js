
import React from 'react';
//import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

/* , { Component }
class DishDetail extends Component{
    rendComments(comments){
        if(comments!=null){
            return comments.map((comment)=>{
                return(
                    <div key={comment.id} >
                        <li className="mt-1">
                        {comment.comment}
                        </li>
                        <li className="mt-1">
                            -- {comment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        
                        </li>
                    </div>
                )
            })
        } else {
            return <div></div>
        }
    }
    render(){
        const { dish } = this.props;
        const comments = dish.comments;

        return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width='100%' src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-16 col-md-5 m-1">
                    <h4>Comments</h4>
                        <ul className="list-unstyled" >
                            {this.rendComments(comments)}
                        </ul>
                </div>

            
            </div>

        </div>)
    }
}

*/

function RenderDish({dish}) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width='100%' src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                

            
            </div>

        </div>)
   
  }

  function RenderComments({comments}) {
      
   
        if(comments!=null){
            return comments.map((comment)=>{
                return(
                    <div key={comment.id} >
                        <li className="mt-1">
                        {comment.comment}
                        </li>
                        <li className="mt-1">
                            -- {comment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        
                        </li>
                    </div>
                )
            })
        } else {
            return <div></div>
        }
    
  }

  const  DishDetail = (props) => {

    if(props.dish !=null)
  {
   return (
        <div className="container">
             <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
        </div>
    
    )  }
    else {
        return <div></div>
    }

  }


export default DishDetail;