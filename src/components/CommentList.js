import React from 'react'



class CommentList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            CommList:['first comment']
        }
    }
    render(){
        return (<div>
                    <label>评论列表</label>
                    <ul>
                        {this.state.CommList.map((item,index)=>(<li key={index}>{item}</li>))}
                    </ul>
                </div>
        )
        
    }
}

export default CommentList