import "@pages/contacts/style.contacts.scss";
import React, {Component} from "react";
import {Jumbotron} from 'reactstrap';

export default class Contacts extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Jumbotron className="jumBody1">
                <h1>Contacts</h1>
                <p className="lead">Kozlovski Vladislav</p>
                <hr className="my-2" />  
                <p><b>email</b>: vlad2704kozlovski@gmail.com</p>                      
                <p><b>skype</b>: sharkoz</p>                      
          </Jumbotron>           
        )
    }
}





