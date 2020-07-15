import React from 'react'

class CommentBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            comm:''
        }
    }
    render(){
        return (
            <form>
                <label>留言内容</label>
                <input type='text' value={this.state.comm}/>
                <input type='button' value='留言'/>
            </form>
        )
    }
}

export default CommentBox