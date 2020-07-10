import React from 'react'
class BoilingVerdict extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        const {celsius}=this.props
        if(celsius>=100){
            return <p>the water would boil</p>
        }
        return <p>the water would not boil</p>
        
    }
}
export default BoilingVerdict