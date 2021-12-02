import React, {Component} from "react";
import Confirm from "@comp/confirm/Confirm";
import ConfirmUpdate from "@comp/confirm/Confirm_update";
import {
    Card, Row, Col, CardBody,
    CardTitle, Button,ButtonGroup, Badge
} from 'reactstrap';
import {Link} from "react-router-dom";

export default class TodoItem extends Component{ 
    constructor(props) {
        super(props);
        this.state= {
            modalUpdate : false,
            modalRemove : false,
            modalUpdateForm : false,
        }
        this.toggleModalUpdate=this.toggleModalUpdate.bind(this);
        this.toggleModalRemove=this.toggleModalRemove.bind(this);
        this.toggleModalUpdateForm=this.toggleModalUpdateForm.bind(this);
    }    

    render() {
        let {item,change, remove, update,} = this.props; 

        return(
            <Card>
                <CardBody>
                    <CardTitle tag="h5"> <Badge color="dark">#{item.id}</Badge> {item.title}</CardTitle> 
                    <Row className="dead">
                    {!item.completed ? <div className="container-red"><div className="gg-alarm"></div><span ><i>Dead line :</i> {item.dead_line}</span></div>  :<div className="container-green"><div className="gg-check-r"></div><span ><i>Compleated :</i> {item.updated_at}</span></div>}
                    </Row>

                    <Row>
                        <Col lg={4}>
                            <ButtonGroup>

                                <Button onClick={this.toggleModalUpdate} tag={"span"} color={item.completed ? "success" : "secondary"}>
                                    {item.completed ? "done" : "undone"}
                                </Button>

                                <Button onClick={this.toggleModalUpdateForm} tag={"span"} color="warning">
                                    update
                                </Button>                               

                                <Button onClick={this.toggleModalRemove} tag={"span"} color="danger">
                                    remove
                                </Button>

                            </ButtonGroup>
                           
                        </Col>

                        <Col lg={2}>
                            <Button outline color="primary" size="sm">
                                <Link to={`/todos/${item.id}/${Date.now()+2}`}>read more</Link>
                            </Button>
                        </Col>
                    </Row>
                </CardBody>

                <Confirm
                    active={this.state.modalUpdate}
                    
                    message={item.completed ? `Change todo's # ${item.id} status to UNDONE?` : `Change todo's # ${item.id} status to DONE?`}                    
                    
                    ok={{
                        title:"change it!",
                        color: "success",
                        fn : ()=>{
                            this.toggleModalUpdate();
                            change(item.id);
                        }
                    }}
                    cancel={this.toggleModalUpdate}
                ><Row>
                    <Col lg={12}>You can change it back latter. (item #{item.id})</Col>
                   
                </Row></Confirm>

                <Confirm
                    active={this.state.modalRemove}
                    message={`Delete todo with id # ${item.id}?`}
                    ok={{
                        title:"sure",
                        color: "danger",
                        fn : ()=>{
                            this.toggleModalRemove();
                            remove(item.id)
                        }
                    }}
                    cancel={this.toggleModalRemove}
                ><Col lg={12}>You can`t change it back latter. (item #{item.id})</Col>

                </Confirm>

                <ConfirmUpdate
                    active={this.state.modalUpdateForm}
                    message={`Update todo's with id # ${item.id}?`}
                    itemId={item.id} //todos: save to prop ID 
                    itemData={item} //todos: save to prop ID 
                    
                    ok={{
                        title:"done",
                        color: "success",
                        fn : ()=>{
                            this.toggleModalUpdateForm();
                            update(item.id);                            
                        }
                    }}
                    cancel={this.toggleModalUpdateForm}>
                    
                </ConfirmUpdate>
            </Card>
        )
        
    }

    toggleModalUpdate(){
        this.setState({
            modalUpdate : !this.state.modalUpdate
        })
    }

    toggleModalRemove(){
        this.setState({
            modalRemove : !this.state.modalRemove
        })
    }

    toggleModalUpdateForm(){
        this.setState({
            modalUpdateForm : !this.state.modalUpdateForm
        })       
    }
    
}


