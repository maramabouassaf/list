import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default (props)=>{
    return(
        <>

            <Row className="mx-0 mt-5">
                <Col md="3"></Col>
                <Col md="3">
                    <li style={{textAlign:"center",textDecoration:props.task.complete ? "line-through":""}} onClick={props.complete}>{props.task.input}</li>
                </Col>
                <Col md="2">
                    <button  onClick={props.del}>x</button>
            </Col>
            </Row>



            </>
    )

}
