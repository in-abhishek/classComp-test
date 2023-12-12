import React from 'react'

class ConstructorLifeCycle extends React.Component {
  constructor() {
    super();   //to call parent constructor
    console.log("constructor");
    this.state = { data: "anil" }
    console.log("this props", this.props);
    // not to call api here html will not load tilll there
  }
  render()  //state ,dom load , props update
  {
    console.log("render");
    return (
      <div>constructorLifeCycle {this.state.data}</div>
    )
  }

}
export default ConstructorLifeCycle;

