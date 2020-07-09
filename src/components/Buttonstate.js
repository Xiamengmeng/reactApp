import React from 'react'
import { render } from '@testing-library/react'
// const state={
//     count:0
// }
// function Buttonstate(props){
//     add(()=>{
//         this.setState({
//                         count:++this.state.count
//                     })
//     })
//     return(
//     <button onClick={this.add.bind(this)}>{props.count}</button>
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
        this.setState({
            count:++this.state.count
        })
        console.log(this.state.count)
    }
    render(){
        return(
        <button onClick={this.add.bind(this)}>{this.state.count}</button>
        )
    }
}
export default Buttonstate