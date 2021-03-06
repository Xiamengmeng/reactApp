import React from 'react'
const scaleNames={
    c:'Celsius',
    f:'Fahrenheit'
}
 class TemperatureInput extends React.Component{
     constructor(props){
         super(props)
        //  this.state={
        //      temperature:''
        //  }
     }
     changeHandle(e){
         console.log(e.target.value)
        //  this.setState({temperature:e.target.value})
        this.props.onTemperatureChange(e.target.value)
     }
     ctof(c){
        return  c*9/5+32
     }
     ftoc(f){
        return (f-32)*5/9

     }
     render(){
         return (
             <div>
                 <span>enter temperature in {scaleNames[this.props.scale]}</span>
                 <input type='text' value={this.props.temperature}  onChange={this.changeHandle.bind(this)}/>
             </div>
         )
     }
 }
 export default TemperatureInput