import React, {BaseSyntheticEvent as e, useState} from "react"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import shortid from "shortid"
export default (props)=>{
    const [change,setChange]=useState("")
    const [add,setAdd]=useState("")
    function handelChange(e) {
    setChange(e.target.value)
    }
    function handelAdd() {
        // e.preventDefault()
setAdd(change)
        setChange("")
       props.onSubmit({
        id: shortid.generate(),
           change:change,
           complete:false
       })
    }
    return(
        <>
      <Row className="mx-0 mt-5">
          <Col md="3"></Col>
          <Col className="d-flex justify-content-center" md="3">
          <input value={change} type="text" onChange={(e)=>{handelChange(e)}}/>
          </Col>
          <Col className="d-flex justify-content-center" md="3">
              <button onClick={handelAdd}>Add Todo</button>
          </Col>
      </Row>

            </>
    )
}
