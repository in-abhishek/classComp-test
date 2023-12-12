import React from 'react'

const NEW_DATA = "NEW DATA SET";


const ChildDaaProps = (props) => {
  return (
    <>
      <div>ChildDaaProps {props.data}</div>
      <button onClick={()=>{props.updateDatatoParent(NEW_DATA)}} className='btutton'>Change data of Parent</button>
    </>
  )
}

export default ChildDaaProps