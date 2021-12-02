import "@pages/about/style.about.scss";
import React, {Component} from "react";
import { Jumbotron} from 'reactstrap';

export default class About extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Jumbotron className="jumBody2">
                <h1>About</h1>                 
                <p> 
This SPA is made on ReactJS. It uses: </p>
<ul>
    <li>Webpack</li>
    <li>RouterDOM</li>
    <li>Redux & React Redux</li>
    <li>Reactstrap</li>
    <li>SCSS</li>
</ul>
                </Jumbotron>
        )
    }
}
