import React from 'react'
class LoginControl extends React.Component{
    constructor(props){
        super(props)
        this.state={
            time:new Date()
        }
    }
    tick(){
        this.setState({time:new Date()})
    }
    componentDidMount(){
        this.timeID=setInterval(()=>{this.tick()},1000)
    }
    componentWillUnmount(){
        clearInterval(this.timeID)
    }
    render(){
        return(
        <span>{this.state.time.toLocaleTimeString()}</span>
        )
    }
}
export default LoginControl 