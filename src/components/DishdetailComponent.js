
import React, { Component } from 'react';
//import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, 
    ModalHeader, ModalBody, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

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
//replacing addComment with postComment in the entire program

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props) {
        super(props);

    this.state = {
        isModalOpen: false
        }; 
      
    
      this.toggleModal = this.toggleModal.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
}
toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
      this.toggleModal();
    this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
      /*  console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));*/
        // event.preventDefault();
    }
    render(){
        return(
            <div>
            <Button outline onClick={this.toggleModal}>
            <span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={this.handleSubmit}>
                    <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={10}>
                                <Control.select model=".rating" id=".rating" name=".rating" className="form-control">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Control.select>
                                    </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={2}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name" className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Comments</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                   submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>

            </div>
            )
            
    }

}

function RenderDish({dish}) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
                </div>
                

            
            </div>

        </div>)
   
  }

  function RenderComments({comments, postComment, dishId}) {
    if(comments!=null)
              return(
                  <div className="col-12 col-md-5 m-1">
                      <h4>Comments</h4>
                      <ul className="list-unstyled">
                      <Stagger in>
                        {comments.map((comment) => {
                            return (
                                <Fade in>
                                <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                                </Fade>
                            );
                        })}
                        </Stagger>
                      </ul>
                      <CommentForm dishId={dishId} postComment={postComment}></CommentForm>
                  </div>
              );
    else
        return(
            <div></div>
        );
  }

   /* let commentList = comments.comments.map((comment, i) => (
      <li key={i} className="commentList">
        {comment.comment}
        <br />
        <br />
        -- {comment.author},
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit"
        }).format(new Date(Date.parse(comment.date)))}
        <br />
        <br />
      </li>
    ));
    commentList.push(<CommentForm ></CommentForm>);
    return commentList;
  }  */


      /*  if(comments!=null){
            return comments.map((comment)=>{
                return(
                    <div key={comment.id} >
                        <li className="mt-1" id="commentlist">
                        {comment.comment}
                        </li>
                        <li className="mt-1">
                            -- {comment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        
                        </li>
                        
                    </div>
               )})
        } else {
            return <div></div>
        }  */

    
 
  const  DishDetail = (props) => {
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) 
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
                        <RenderComments comments={props.comments}
                                       postComment={props.postComment}
                                        dishId={props.dish.id} />
                    </div>
                </div>
        </div>
    
    )  }
    else {
        return <div></div>
    }

  }

export default DishDetail;

/* this part updated with animation

 {comments.map((comment) => {
                              return(
                                  <div key={comment.id} >
                                <li className="mt-1" id="commentlist" >
                                {comment.comment}
                                </li>
                                <li className="mt-1">
                                  <p>  -- {comment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric',
                                   month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                 </li>
                                  </div> 
                               
                              );
                          })}
                          */