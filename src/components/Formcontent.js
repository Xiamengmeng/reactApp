import React from 'react'

class Formcontent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:''
        }
    }
    changeHandle(e){
        console.log(e.target.value)
        this.setState({
            value:e.target.value
        })
    }
    clickHandle(){
        console.log('click')
        // alert(this.state.value)
    }
    submitHandle(){
        console.log('submit')
        
    }
    render(){
        return(
            <form onSubmit={this.submitHandle.bind(this)}>
                <label>留言内容：</label>
                <input type='text' onChange={this.changeHandle.bind(this)}/>
                <input type='submit' onClick={this.clickHandle.bind(this)} placeholder='留言'/>
            </form>
           
        )
    }
}
export default Formcontent