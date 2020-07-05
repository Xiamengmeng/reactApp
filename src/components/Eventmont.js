import React from 'react'
import { render } from '@testing-library/react'

class Eventmont extends React.Component{
    click(){
        console.log(' event of  click')
    }
render(){
    return(
        <button onClick={this.click.bind(this)}>按钮</button>
    )
}
}

// const Eventmont=(props)=>{

    
// }
export default Eventmont