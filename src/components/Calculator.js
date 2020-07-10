import React from 'react'
import BoilingVerdict from './BoilingVerdict'
class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state={
            temperture:''
        }
    }
    changeHandle(e){
        console.log(e.target.value)
        this.setState({temperture:e.target.value})
    }
    render(){
        return(
            <div>
                <input value={this.state.temperture} onChange={this.changeHandle.bind(this)}/>
                <BoilingVerdict celsius={this.state.temperture}/>
            </div>
            
                    )
    }
}

export default Calculator