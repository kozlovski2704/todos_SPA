import React, {Fragment} from 'react';
import axios from "axios";
import "@elems/forms/style.core.scss";

import {hideNotification,showNotifUpdate} from "@redux/actions/notification";

import { useDispatch} from 'react-redux';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

 
    export default function ConfirmUpdate (props) { 
       
        const dispatch = useDispatch();    
        const {ok, message, active , cancel, itemId,itemData} = props;
        // let [data,setData] = useState(undefined);
        
         
           /*  useEffect(()=>{
                axios.get(`${process.env.API_URL_XHR}/${itemId}`,{                 
                    method: 'GET',
                    headers: {
                        'apptoken': process.env.API_KEY,
                    }
                }
                )
                .then(response=>{
                     setData(response.data);
                    if (data!=undefined){

                        console.error("data:", itemId);                    
                    } 
                    console.log("Confirm update responce");                    
                    console.error("data:", itemId);                    
                })
                .catch(error => console.error(error))
            });   */
            
            return (
        <Fragment>                     
              
            <Modal isOpen={active} toggle={cancel}>
                <ModalHeader toggle={cancel}>{message}</ModalHeader>
                <ModalBody>
                    <Form className="mainForm" onSubmit={submit}>   

                        <FormGroup>
                            <Label for="titleText">Title</Label>
                            <Input 
                            required
                            type="text" 
                            name="title" 
                            id="titleText" 
                            // defaultValue={data ? data.title : null}             
                            defaultValue={itemData.title}             
                            // placeholder={title}             
                            />
                        </FormGroup>  

                        <FormGroup>
                            <Label for="exampleText">Description</Label>
                            <Input 
                            required
                            type="textarea" 
                            name="description" 
                            id="exampleText"  
                            defaultValue={itemData.description}                                        
                            // defaultValue={data ? data.description : null}                                
                            // placeholder={"description"}             
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleDate">Dealine: {itemData.dead_line} </Label>
                            <Input
                            required
                            type="date"
                            name="dead_line"
                            id="exampleDate"
                            // defaultValue={itemData.dead_line}   
                            // placeholder="date placeholder"
                            // defaultValue={data ? data["dead_line"] : null}

                            />
                        </FormGroup>   
                      {/*   <FormGroup>
                             Undone <input type={"radio"} value={0} name={"completed"}/> 
                            <Label for="completed">it`s done</Label>
                            <Input
                            // required
                            type="radio"
                            name="completed"
                            id="completed"
                            value={1}
                            placeholder="date placeholder"
                            />
                        </FormGroup>    */}
            
                        <Button  color="info">update</Button>

                    </Form>
                </ModalBody>

                        <ModalFooter>                
                            
                                <Button color={ok.color} onClick={ok.fn}>{ok.title}</Button>
                                <Button color="secondary" onClick={cancel}>cancel</Button>
                             
                        </ModalFooter>
            </Modal>        
        </Fragment>
    );
 

    function submit(e) { 
        e.preventDefault();
        const form = e.target;
        let data =  new FormData(e.target);
            data.set('order',0);
            // data.set('completed',0);
           
 ////////////////////
//  props.submit(data,props.id);
 //////////////////////////
 
        axios.put(`${process.env.API_URL_XHR}/${itemId}`,data,{ //todos: get from prop
            headers: {
                'apptoken': process.env.API_KEY,
            },
        })
            .then(response=>{
                dispatch( showNotifUpdate());               
                console.log("Form update:",response);                               
                // form.reset();                
                setTimeout(()=>{
                    dispatch(hideNotification());               
                    
                },2000); 
            })                        
            
            .catch(error=>{
                console.log(error);               
                
            })    
        }
}



 