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
    //   ctof(c){
    //         return  c*9/5+32
    //     }
    //   ftoc(f){
    //         return (f-32)*5/9

    //     }
    //     tryConvert(){
    //      const input = parseFloat(this.props.temperature)
    //      if(Number.isNaN(input)){
    //          return ''
    //      }
    //      const output = convert(input);
    //      const rounded=Math.round(output*1000)/1000;
    //      return rounded.toString()
    //  }
    render(){
        // const scale = this.state.scale;
        // const temperature = this.state.temperature;
        // const celsius = scale === 'f' ? tryConvert(temperature, ftoc) : temperature;
        // const fahrenheit = scale === 'c' ? tryConvert(temperature, ctof) : temperature;
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