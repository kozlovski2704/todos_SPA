import React, {Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row,Col, ButtonGroup,ModalFooter } from 'reactstrap';

const Confirm = (props) => {

    const {ok, message, active , cancel} = props; 

    return (
        <Fragment>
            <Modal isOpen={active} toggle={cancel}>
                <ModalHeader toggle={cancel}>{message}</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col lg={12}>
                            {props.children}
                        </Col>                    
                    </Row>
                </ModalBody>

                <ModalFooter>      
                    <Button color={ok.color} onClick={ok.fn}>{ok.title}</Button>
                    <Button color="secondary" onClick={cancel}>cancel</Button>                
                </ModalFooter>
            </Modal>
        </Fragment>
    );
}

export default Confirm;