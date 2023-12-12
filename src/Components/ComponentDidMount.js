import React from 'react'


// this will render when all html will be ready use API call ,hide call , hide show
class ComponentDidMount extends React.Component {
    constructor() {
        super();
        console.log("constructor");
        this.state={
            name:"raj"
        }
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    render() {
        // {this.setState({name:"rere"})}  infinite time this will show
        console.log("render");

        return (
            <>
            <div>ComponentDidMount</div>
            <button onClick={()=>{this.setState({name: "rahul"})}} className='btutton'>updae show</button>
            </>
        )
    }

}

export default ComponentDidMount