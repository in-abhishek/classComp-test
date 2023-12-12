import React from 'react'

class ClassCounter extends React.Component {
    constructor(){
        super();
        this.state={
            count:0,
        }
    }
    render(){
        return (
            <div className='counter'>
                <h2>Counter {this.state.count}</h2>
                <button onClick={()=>{this.setState({count:this.state.count + 1})}} className='btutton'>Increase Counter</button>
                <button onClick={()=>{this.setState({count:this.state.count - 1})}} className='btutton'>Decrease Counter</button>
                <button onClick={()=>{this.setState({count:0})}} className='btutton'>Reset Counter</button>
            </div>
          )
    }
  
}

export default ClassCounter