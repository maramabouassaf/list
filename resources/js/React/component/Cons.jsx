// import React,{Component} from "react"
// import Constructor from "../component/Construct"
// class hello extends Component{
//     state={
//         items:[
//             {name:"hala",age:20,id:1},
//             {name:"rana",age:23,id:2},
//             {name:"dana",age:21,id:3},
//             ]
//     }
//     handelAdd=(e)=>{
//         let items=this.state.items
//         items.push({name:"jawa",age:25,id:4})
//         this.setState({
//             items:items
//         })
//     }
//     handelDel=(e)=>{
//         this.setState({
//             items:[{name:"dana",age:21,id:3},]
//         })
//     }
//     render() {
//         return(
//             <>
//               <Constructor value={this.state.items}/>
//                 <div>
//                     <button onClick={this.handelAdd}>ADD</button>
//                 </div>
//                 <div>
//                     <button onClick={this.handelDel}>DELETE</button>
//                 </div>
//                 </>
//         )
//     }
// }
// export default hello
