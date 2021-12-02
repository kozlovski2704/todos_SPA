import "@pages/todos/style.todos.scss";
import React, {Component, useEffect, useState, Fragment} from "react";
import {
    Card, Row, Col, CardBody,
    CardTitle, CardText, Button, CardSubtitle
} from 'reactstrap';
import {Link} from "react-router-dom";
import axios from "axios";
import Loader from "@comp/loader/Loader"; 

export default function ReadMore (props) {
     
    let [item, setItem] = useState(null);    
    let [loader, setILoader] = useState(true);
    
    useEffect(()=>{
        axios.get(`${process.env.API_URL_XHR}/${props.match.params.id}`)
        .then(response=>{
            setItem(response.data);     
            setILoader(false);       
        })
        .catch(error => console.error(error))
    },[]); 
   
    return (
        <Fragment>
        {(item!=null)&&(loader!=true) ?
      <Card>
      <CardBody>
            <CardTitle tag="h5">Title: {item.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">for todos # {props.match.params.id}</CardSubtitle>  
            <CardText><i>Description :</i> {item.description}</CardText>      
            <CardText><i>Dead line :</i> {item.dead_line}</CardText>      
            <CardText><i>Completed :</i> {item.completed}</CardText>      
            <CardText><i>created :</i> {item.created_at}</CardText>      
            <CardText><i>updated:</i> {item.updated_at}</CardText>      
                    <Row>                    
                <Col lg={10}>
                        <Button color="warning" size="sm">
                        <Link to={"/todos"}>back</Link>
                        </Button>
                    </Col>
                </Row>
      </CardBody>
      </Card>
      : <Loader/>}
      </Fragment>
          )
}
 



