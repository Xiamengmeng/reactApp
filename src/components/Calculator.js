import React from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'
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
    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
      }
    
      handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
      }
    render(){
        return(
            <div>
                {/* <input value={this.state.temperture} onChange={this.changeHandle.bind(this)}/> */}
                <TemperatureInput scale='c' temperture={this.state.temperture} onTemperatureChange={this.handleCelsiusChange.bind(this)}/><br/>
                <TemperatureInput scale='f'/><br/>
                <BoilingVerdict celsius={this.state.temperture}/>
            </div>
            
                    )
    }
}

export default Calculator