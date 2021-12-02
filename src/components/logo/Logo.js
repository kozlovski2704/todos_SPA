import React from "react";
import  "@comp/logo/style.scss";
import {Link} from "react-router-dom";

export default function Logo({text,bgColor}) {

    return(      
        <Link to={"/"}>
        <img className={"logo"} src="https://s3.tproger.ru/uploads/2016/10/reactmini.png"/>        
        </Link>       
    )
}

/* function getTime() {
    let date = new Date();
    return date.toLocaleString();
} */












/* import React from "react";
import logo from "@images/logo_tut.png";
import "./style.scss";

export default function Logo({text,bgColor}) {

    return(
        <div className={"logo"} style={
            {background:bgColor}
        } >
           {text}
        </div>
    )
}

function getTime() {
    let date = new Date();
    return date.toLocaleString();
} */