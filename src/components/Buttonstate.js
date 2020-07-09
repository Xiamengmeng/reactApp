import React from 'react'
import { render } from '@testing-library/react'
// function Buttonstate(props){

//     return(
//     <button onClick={add}>{props.count}</button>
//     )
// }

class Buttonstate extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }

    }
    add(){
        this.setState(()=>{
            this.state.count++;
            console.log(this.state.count)
        })
    }
    render(){
        return(
        <button onClick={this.add.bind(this)}>{this.state.count}</button>
        )
    }
}
export default Buttonstate