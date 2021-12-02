 
import "@elems/forms/style.core.scss";
import Notif from "@comp/notification/Notification";
 
import axios from "axios";
import React, { useState } from 'react';
import { Collapse, Button,Form, FormGroup, Label, Input,} from 'reactstrap';

    const AddPostItemForm = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [notificationStat, setNotif] = useState(false);   
    const [notificationClass, setNotifClass] = useState("good");   
    const [notificationMessage, setNotifText] = useState("todo was added!");  
    const toggle = () => setIsOpen(!isOpen);    
    const [status, setStatus] = useState('▼');
    const onEntered = () => setStatus('▲');  
    const onExited = () => setStatus('▼');
/*
* "title": "test",
            "description": "admin@comet24.pro",
            "completed": 0,
            "order": 0,
            "dead_line": "2021-01-16 21:51:57",
* */
    return (
    <div>
      {notificationStat ? <Notif status={notificationClass}>{notificationMessage}</Notif> :null} 
      <Button outline color="warning" onClick={toggle} style={{ marginBottom: '1rem' }} >Add todos here {status}</Button>

      <Collapse isOpen={isOpen}  onEntered={onEntered}   onExited={onExited}>      

            <Form className="mainForm" onSubmit={submit}>   
                <FormGroup>
                    <Label for="titleText">Title</Label>
                    <Input 
                    required
                    type="text" 
                    name="title" 
                    id="titleText" 
                    placeholder={"title"}             
                    />
                </FormGroup>  

                <FormGroup>
                    <Label for="exampleText">Description</Label>
                    <Input 
                    required
                    type="textarea" 
                    name="description" 
                    id="exampleText" 
                    placeholder={"description"}             
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleDate">Dealine</Label>
                    <Input
                    required
                    type="date"
                    name="dead_line"
                    id="exampleDate"
                    placeholder="date placeholder"
                    />
                </FormGroup>   
            
                <Button>ADD</Button>
            </Form>

       </Collapse>
    </div>
    );


    function submit(e) { 
        e.preventDefault();
        const form = e.target;
        let data =  new FormData(e.target);
            data.set('order',0);
            data.set('completed',0);

        axios.post(`${process.env.API_URL_XHR}`,data,{
            headers: {
                'apptoken': process.env.API_KEY,
            },
        })
            .then(response=>{
                // console.log(response)                                             
                setNotif(true);  
                form.reset();
                setTimeout(()=>{
                    setNotif(false);  
                },3000);
                
            })     
                   
            
            .catch(error=>{
                console.log(error);
                setNotifText('Something went wrong! Todos wasn`t added.');
                setNotif(true); 
                setNotifClass('bad');
                setTimeout(()=>{
                    setNotif(false);  
                    setNotifClass('good');
                    setNotifText('todo was added!');
                },2000);
            })
    }
}

export default AddPostItemForm;