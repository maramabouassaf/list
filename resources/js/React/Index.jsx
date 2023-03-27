import React from "react";
import {useState} from "react"
import {createRoot} from "react-dom/client"
import Todo from "./component/Todo";
import Print from "./component/Print";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TestMaram from "./component/TestMaram";
import PrintMaram from "./component/PrintMaram";

function App() {

//     let [tod,setTod]=useState([])
//     const addTodo=(todo)=>{
//         setTod([todo, ...tod])
//     }
//     const handelDel =(id)=>{
//         setTod(tod.filter((todo)=>todo.id !== id))
//     }
//     const [show,setShow]=useState("all")
//     const update=(s)=>{
//         setShow(s)
//     }
//     const toggleComplete =(id)=>{
//         setTod(tod.map((todo)=>{
//             if(todo.id===id){
//                 return {
//                     ...todo,
//                     complete: !todo.complete
//                 }
//             }else {
//                 return todo
//
//             }
//         }))
//     }
//     if(show=== "active"){
//         tod=tod.filter((todo)=> !todo.complete)
//     }else if(show==="complete"){
//         tod=tod.filter((todo)=> todo.complete)
// }else  {
//
//     }
//   const [toggleAll,setToggleAll]=useState(true)
//     const removeAllComplete=()=>{
//         setTod(tod.filter((todo)=> !todo.complete))
//     }




    return(
        <>
{/*<Todo onSubmit={addTodo}/>*/}
{/*            {*/}
{/*                tod.map((todo)=>(*/}
{/*                    <Print key={todo.id} todo={todo} onDelete={()=> handelDel(todo.id)} toggleComplete={()=>toggleComplete(todo.id)}/>*/}
{/*                ))*/}
{/*            }*/}
{/*            <Row className="mx-0 mt-5">*/}
{/*                <Col md="2"></Col>*/}
{/*                <Col className="d-flex justify-content-center" md="2 ">*/}
{/*                    <button onClick={()=> update("add")}>All</button>*/}
{/*                </Col>*/}
{/*                <Col className="d-flex justify-content-center" md="2 ">*/}
{/*                    <button  onClick={()=> update("active")}>Active</button>*/}
{/*                </Col>*/}
{/*                <Col className="d-flex justify-content-center" md="2 ">*/}
{/*                    <button  onClick={()=> update("complete")}>Complete</button>*/}
{/*                </Col>*/}
{/*            </Row>*/}
{/*            <Row className="mx-0 mt-5">*/}
{/*                <Col md="3"></Col>*/}
{/*                <Col md="2">*/}
{/*                    {tod.some((todo)=>todo.complete)?(*/}
{/*                        <button  onClick={removeAllComplete}>Remove All Complete</button>*/}

{/*                    ): null}*/}
{/*                </Col>*/}
{/*                <Col md="2">*/}
{/*                    <button onClick={()=>{*/}
{/*                        setTod(*/}
{/*                            tod.map((todo)=> ({*/}
{/*                                ...todo,*/}
{/*                                complete:toggleAll*/}
{/*                            }) )*/}
{/*                        )*/}
{/*                        setToggleAll(!toggleAll)*/}
{/*                    }}>Toggle All Complete :{'${toggleAll}'}</button>*/}
            {/*    </Col>*/}
            {/*</Row>*/}

<TestMaram />



       </>
    )
}
createRoot(document.getElementById("root")).render(<App/>)
