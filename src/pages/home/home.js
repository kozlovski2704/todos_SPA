import "@pages/home/style.home.scss";
import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";
import {Jumbotron} from 'reactstrap';

let timeNow ='';
getDateTime();
function getDateTime() {

    let date = new Date();
    let hour = date.getHours();
    
    if (hour<=6){
        timeNow = "night";
    }
    else if (hour>6 && hour<=12){
        timeNow = "morning";
    }
    else if (hour>12 && hour<=18){
        timeNow = "day";
    }
    else{
        timeNow ="evening";
    }
    return timeNow;    
}

export default class Home extends Component{
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <Fragment>
                 <Jumbotron className="jumBody">
                    {/* <h1 className="display-3">Hello, world!</h1> */}
                    <h1 className="display-3">Good {timeNow}, world!</h1>
                    <p className="lead">This is my firs SPA, made with REACT =)</p>
                    <hr className="my-2" />
                    <p>It uses   <a target="blank" href="https://jsonplaceholder.typicode.com/"> <font color="#4c1d95"><b>json  placeholder</b></font></a> api to form  <span><Link class="hover-shadow hover-color" to={"/posts"}><span>p</span><span>o</span><span>s</span><span>t</span><span>s</span></Link >
                    </span> and <a target="blank" href="https://testxhr.com/"> <font color="#134608"><b>TestXhr.com</b></font></a> api to form <span><Link class="hover-shadow hover-color" to={"/todos"}><span>t</span><span>o</span><span>d</span><span>o</span><span>s</span></Link >
                    </span> lists.</p>        
              </Jumbotron>              
            </Fragment>
        )
    }
}




