import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default (props)=>{
    return(
        <>
            <Row className="mx-0 mt-3"></Row>
            <Row className="mx-0 mt-0">
                <Col md="2"></Col>
                <Col md="4">
            <li  onClick={props.toggleComplete} style={{textAlign:"center",textDecoration:props.todo.complete ? "line-through":""}}>{props.todo.change}</li>
                </Col>
                <Col className="d-flex justify-content-center" md="2 ">
                    <button className="delete" onClick={props.onDelete}>x</button>
                </Col>
            </Row>



            </>
    )

}
