import React from 'react'



class CommentList extends React.Component{
    
    render(){
        const {CommList}=this.props
        return (<div>
                    <label>评论列表</label>
                    <ul>
                        {CommList.map((item,index)=>(<li key={index}>{item}</li>))}
                    </ul>
                </div>
        )
        
    }
}

export default CommentList