import React from "react";
import Logo from "@comp/logo/Logo";
import { Row, Col,} from 'reactstrap';
import "./style.scss";

export default function Header() {

    return(
        <Row>
            <Col lg={4}>
                <Logo/>
            </Col>
            <Col lg={7}></Col>
            <Col lg={1}>             
            </Col>
        </Row>
    )  
}