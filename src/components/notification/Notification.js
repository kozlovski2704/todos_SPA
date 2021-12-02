import React from 'react';
import { Row,Col } from 'reactstrap';
import  "@comp/notification/Notification.style.scss";
 
export default function Notification(props) {  

    return (      
         <div className={'notif-' + props.status}>  
                    <Row >
                        <Col lg={12}>
                        {props.children}
                        </Col>
                    </Row>            
        </div>
    );
}

 