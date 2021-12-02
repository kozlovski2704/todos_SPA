import React, {Component} from "react";
import {Col} from 'reactstrap';
import {Link} from "react-router-dom";

export default class ErrorPage extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Col lg={12} className={"some-class"}>
                <h1>page not found</h1>            
            <Link to={"/"}>go to main page</Link>
        </Col>
        )
    }
}


