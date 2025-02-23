
import { createContext } from 'react'
import './App.css'
import Child1 from './Child1'

const quote = "The only way to learn a new programming language is by writing programs in it."

const language = ['HTML', 'CSS', 'JAVASCRIPT', 'NODEJS', 'NOSQL']

const data = {
  quote,
  language
}

export const context = createContext()

function App() {
       
  return (
    <>
       <context.Provider value={data}>
        <div style={{backgroundColor:'green', padding:'1rem', color:'black'}}>
            <h1>This is Parent</h1>
            <Child1/>
        </div>
       </context.Provider>
    </>
  )
}

export default App
