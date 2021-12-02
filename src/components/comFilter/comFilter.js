import React, { useState, Fragment } from 'react';
import { Button, ButtonGroup, Row, Col,} from 'reactstrap';

const ComFilter = (props) => {
    const {filterType} = props;
    return (
        <Fragment>
            <Col lg={11}>
            <ButtonGroup className="comfilter">
                <Button color={"secondary"} onClick={()=>filterType("show10")}>Show 10</Button>
                <Button color={"secondary"} onClick={()=>filterType("show50")}>Show 50</Button>
                <Button color={"info"}  onClick={()=>filterType("showAll")}>Show all</Button>
            </ButtonGroup>
            </Col>
        </Fragment>
    );
}

export default ComFilter;