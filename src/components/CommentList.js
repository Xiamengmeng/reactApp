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


// vue 的双向绑定原理、
// Object.defineProperty(obj,'txt',{
    // getter:function(){
    //         return obj
    // }
    // setter:function(newValue){
        // document.getElementById('txt').value=newVlaue
        // document.getElementById('show').innerHTML=newValue
    // }
// })
// document.addEventListener('keyup',(e)=>{obj.txt=e.target.value})