import React, {useState} from "react";
import {Col, Button } from 'reactstrap';
import Confirm from "@comp/confirm/Confirm";
import AddPostItemForm from "@elems/forms/AddPostItemForm";

export default function Add() {

    const [modal, setModal] = useState(false) 

    return(
        <div>      
            <Col lg={1}>
                <Button className="add" color={"warning"} onClick={toggleModal}>Add</Button>
            </Col>
            <Confirm
                active={modal}
                message={`Добавить запись?`}
                ok={{
                    title:"Добавить",
                    color: "success",
                    fn : ()=>{
                        console.log(2222)
                    }
                }}
                cancel={toggleModal}
            >
                <AddPostItemForm />
            </Confirm>         
        </div>
    )

    function toggleModal() {
        setModal(!modal)
    }
}