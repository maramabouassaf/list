import React, {BaseSyntheticEvent as e, useState} from "react";
import PrintMaram from "./PrintMaram";
import shortid from "shortid";
import {getElementFromSelector} from "bootstrap/js/src/util";
export default ()=>{
    const [input,setInput]=useState("")
    const [add,setAdd]=useState("")
    let [tasks,setTasks]=useState([])
    const addTask=(task)=>{
        setTasks([task , ...tasks])
    }
const [show,setShow]=useState("all")
    function handelChange(e) {
setInput(e.target.value)
    }
    function handelAdd(e,task) {
        e.preventDefault()
setAdd(input)
        setInput("")
        addTask({
            id: shortid.generate(),
            input:input,
            complete:false

        })
    }
    function delTask(id) {
setTasks(tasks.filter((task)=>task.id  !==id))
    }
    function handelCom(id) {
    setTasks(tasks.map((task)=>{
    if (task.id ===id){
        return{
            ...task,
            complete:!task.complete
        }
    }
    else {
        return task
    }
    }
    ))}

            const handelShow=(s)=> {
        setShow(s)
        }

        if (show==="act"){
            tasks=tasks.filter((task)=> !task.complete)
        }
       else if (show==="com"){
         tasks=tasks.filter((task)=> task.complete)
        }
const removeAll=(task)=>{
           setTasks(tasks.filter((task)=>
              !task.complete
           ))
}



        return(
        <>
            <form action="">
                <input value={input} onChange={(e)=>{handelChange(e)}} type="text"/>
                <button onClick={handelAdd}>Add Task</button>
            </form>
            {
                tasks.map((task)=> (
            <PrintMaram task={task} tasks={tasks} del={()=>delTask(task.id)} complete={()=>handelCom(task.id)}/>
                ) )}
            <form action="">
                <button style={{width:"4rem"}} onClick={()=>handelShow("act")}>Active</button>
                <button style={{width:"4rem"}} onClick={()=>handelShow("com")}>Complete</button>
                <button style={{width:"4rem"}} onClick={()=>handelShow("all")}>All</button>
            </form>
            <form action="">
                {
                    tasks.some((task)=> task.complete ) ? (
                    <button onClick={removeAll}>remove all</button>)
                        : null
                }
                <button onClick={()=>{
                setTasks(tasks.map((task)=>({
                    ...task,
                    complete:true
                    }))
                )

                }  }>complete all</button>
            </form>
            </>
    )
}
