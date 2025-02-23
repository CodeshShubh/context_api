import React from 'react'
import Child2 from './Child2'

const child1 = () => {
  return (
    <div style={{backgroundColor:'yellow', padding:'1rem'}}>
        <h1 >child1</h1>
        <Child2/>
    </div>
  )
}

export default child1