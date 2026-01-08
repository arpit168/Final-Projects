import { p } from 'motion/react-client'
import React, { useState } from 'react'

const Toggle = () => {
    const [show,setShow] = useState(false)
  return (
    <>
    <div>
        <button onClick={()=>setShow(!show)}>Toggle</button>
        {show && <p>Hellow World!</p> }
    </div>
    
    </>
  )
}

export default Toggle