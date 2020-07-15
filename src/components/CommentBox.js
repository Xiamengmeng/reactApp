import React from 'react'

class CommentBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            comm:''
        }
    }
    submitHandle(e){
        console.log(e)
    }
    changHandle(e){
        // this.setState({comm:e.target.value})
    }
    clickHandle(){
        
    }
    render(){
        return (
            <form onSubmit={this.submitHandle.bind(this)}>
                <label>留言内容</label>
                <input type='text' defaultValue='' onChange={this.changHandle.bind()}/>
                <button type='button'  onClick={this.clickHandle.bind()}>留言</button>
            </form>
        )
    }
}
 
export default CommentBox