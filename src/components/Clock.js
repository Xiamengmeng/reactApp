import React from 'react'
class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state={
            date:new Date()
        }

    }
  
    componentDidMount(){
        this.timerID=setInterval(
            ()=>{this.tick()},1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerID) 
    }  
    tick(){
        this.setState({
            date:new Date()
        })
    }
    render(){
    return (<div>
        <h1>Hello React</h1>
        <span>北京时间{this.state.date.toLocaleTimeString()}</span>

    </div>)
    }
}
export default Clock                          