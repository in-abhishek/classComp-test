import React, { useState } from 'react'

const FunctionalCounter = () => {

  const[count,setCount] = useState(0);

  return (
    <div className='counter'>
      <h2>FunctionalCounter {count}</h2>
      <button  onClick={()=>{setCount(count + 1)}} className='btutton'>Increase Counter</button>
      <button onClick={()=>{setCount(count - 1)}} className='btutton'>Decrease Counter</button>
      <button onClick={()=>{setCount(0)}} className='btutton'>Reset Counter</button>
    </div>
  )
}

export default FunctionalCounter;