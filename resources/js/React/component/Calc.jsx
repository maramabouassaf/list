// import React, {useState} from "react"
// import {resolvePackageEntry} from "vite";
// export default ()=>{
//     const [value,setValue]=useState("")
//     // const [op,setOp]=useState("")
//     // const [equal,setEqual]=useState("")
//     function handelClick(e,type) {
// switch (type) {
//     case 1:setValue(value+e.target.value)
//         break
//     case 2:setValue(value+e.target.value)
//         break
//     case 3:setValue(value+e.target.value)
//         break
//     case 4:setValue(value+e.target.value)
//         break
//     case 5:setValue(value+e.target.value)
//         break
//     case 6:setValue(value.slice(0,-1))
//         break
//     case 7:setValue(eval(value))
//         break
// }
//
//     }
//
//
// //    function handelResult() {
// // setEqual(op)
// //    }
// //    function handelChange(e) {
// // setOp(e.target.value)
// //    }
//     return(
//         <>
//            <div style={{display:"flex",justifyContent:"center"}}>
//                <input  value={value } type="text"/>
//            </div>
//             <div style={{display:"flex",justifyContent:"center"}}>-------</div>
//             <div style={{display:"flex",justifyContent:"center"}}>
//                 <button value="1" onClick={(e)=>{
//                     handelClick(e,1)
//                 }}>1</button>
//                 <button value="2" onClick={(e)=>{
//                     handelClick(e,2)
//                 }}>2</button>
//                 <button value="3"
//                     onClick={(e)=>{
//                     handelClick(e,3)
//                 }}
//                 >3</button>
//             </div>
//             <div style={{display:"flex",justifyContent:"center"}}>-------</div>
//             <div style={{display:"flex",justifyContent:"center"}}>
//                 <button value="+"
//                     onClick={(e)=>{
//                     handelClick(e,4)
//                 }}
//                 >+</button>
//                 <button value="-"
//                     onClick={(e)=>{
//                     handelClick(e,5)
//                 }}
//                 >-</button>
//                 <button onClick={(e)=>{
//                     handelClick(e,7)
//                 }}>=</button>
//             </div>
//             <div style={{display:"flex",justifyContent:"center"}}>
//                 <button onClick={(e)=>{
//                     handelClick(e,6)
//                 }}>c</button>
//             </div>
//             </>
//     )
// }
