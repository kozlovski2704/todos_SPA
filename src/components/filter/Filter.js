import React from 'react';
import { Button, ButtonGroup,Col,} from 'reactstrap';

const Filter = (props) => {
     
    const {filterType, } = props;
    return (
        <div>            
            <Col lg={11}>
            <ButtonGroup className="filter">
                <Button color={"primary"} onClick={()=>filterType("all")}>All {/* ({props.statusAll}) */}</Button> 
                <Button color={"success"} onClick={()=>filterType("done")}>Done  {/* ({props.statusDone}) */}</Button>
                <Button color={"danger"}  onClick={()=>filterType("undone")}>Undone {/* ({props.statusUndone}) */}</Button>
            </ButtonGroup>
            </Col>            
        </div>
    );    
}

export default Filter;