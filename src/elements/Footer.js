import React from "react";
import Timer from "@comp/timer/Timer";
import "./style.scss";

export default function Footer() {
    
    return(
        
        <footer>
            <div class="container">
            <div class="glitch" data-text="Made on React">Made on React</div>
              <div class="glow">Made on React</div> 
            </div>  
                <Timer/>  
        </footer>      
    )   
}

