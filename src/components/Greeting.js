import React from 'react'
import Showwing from './Showwing'
import Unshowwing from './Unshowwing'

class Greeting extends React.Component{
    
    render(){
        const {isLogin}=this.props
        if (isLogin){
            return (
            <Showwing/>
                )
        }
        return (<Unshowwing/>)
        
    }
}
export default Greeting
