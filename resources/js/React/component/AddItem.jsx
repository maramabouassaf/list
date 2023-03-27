import React,{Component} from "react"
import Submit from "./Submit";
class Add extends Component{
    constructor(props) {
        super(props);
        this.state={
            newVal:"",
            added:[props.values]
    }
    this.handelClick=this.handelClick.bind(this)
        this.handelChange=this.handelChange.bind(this)
    }
    handelChange(e){
        this.setState({newVal:e.target.value})
}
    handelClick(e){
        e.preventDefault()
        this.setState({added:[this.state.added,this.state.newVal],
            newVal:""})
    }
    render() {
        let VAL=this.state.added.map(val => <li>{val}</li>)
        return(
            <>
                <div>
                    <input value={this.state.newVal}  onChange={this.handelChange} type="text"/>
                </div>
                <div>
                    <button  onClick={this.handelClick}>{this.props.btn}</button>
                </div>
             <Submit text={VAL}/>
            </>
        )
    }
}
export default Add
