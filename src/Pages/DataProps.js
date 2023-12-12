import React, {useState} from 'react'
import ChildDaaProps from '../Components/ChildDaaProps'

const DataProps = () => {
    const[data,setData]=useState("aBHISHEK");
    const[val,setVal]=useState("child-data");
    const updateDatatoParent=(item)=>{
      setVal(item);
    }
  return (
    <>
    <h1>DataProps parent {val}</h1>
    <ChildDaaProps data={data} updateDatatoParent={updateDatatoParent} />
    <button onClick={()=>{setData("praveen")}} className='btutton'>Update Data from parent to Child</button>
    </>
  )
}

export default DataProps