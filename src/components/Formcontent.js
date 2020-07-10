import React from 'react'

class Formcontent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:'',
            list:['uu','oo','pp']
        }
    }
    changeHandle(e){
        console.log(e.target.value)
        this.setState({
            value:e.target.value
        })
    }
    clickHandle(e){
        // e.preventDefault()
        console.log('click')
        // alert(this.state.value)
        this.state.list.push(this.state.value)
        console.log(this.state.list)
        this.setState({list:this.state.list})
    }
    submitHandle(){
        console.log('submit')
        
    }
    render(){
        return(
            <div> 
                <form onSubmit={this.submitHandle.bind(this)}>
                    <label>留言内容：</label>
                    <input type='text' onChange={this.changeHandle.bind(this)}/>
                    <input type='submit' onClick={this.clickHandle.bind(this)} placeholder='留言'/>
                </form>
                <ul>
                    {this.state.list.map((item,index)=>(<li key={index}>{item}</li>))}
                 {/* <li>{this.state.list.map((item,index)=>{item})}</li> */}

                </ul>

            </div>
           
           
        )
    }
}
export default Formcontent