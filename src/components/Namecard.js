import React from 'react'
class Namecard extends React.Component{
    //  
    render(){
        const {name,number,kind,tags}=this.props
        return(
            <div alert alert-success>
                <h4>{name}</h4>
                <ul>
                    <li>电话：{number}</li>
                    <li>{kind?'人类':'外星生物'}</li>
                </ul>
                {tags.map((item,index)=>( <span key={index}>{item}</span>
)
                   
                )
                }

                
            </div>
        )
    }
}
export default Namecard