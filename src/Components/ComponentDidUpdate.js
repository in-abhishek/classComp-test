import React from 'react'

class ComponentDidUpdate extends React.Component{
    constructor(){
        super();
        console.log("constructor");
        this.state={
            name:"pror",
        }
    }
    componentDidUpdate(preProps,preState,snapshot){
        console.log("componentDidUpdate",preState);
    }

render(){
    console.log("render");
    return (
        <>
        <div>ComponentDidUpdate</div>
        <button onClick={()=>{this.setState({name:"sklals"})}} className='btutton'>Render data</button>
        </>
      )
}
  
}

export default ComponentDidUpdate