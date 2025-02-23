import { useContext } from "react"
import {context} from './App'

const child3 = () => {
   const {quote, language} = useContext(context)
  return (
    <div style={{backgroundColor:'red', padding:'1rem'}}>
      <h1>child3</h1>
       <p>{quote}</p>
       {
        language.map((items,index)=>{
          return <li key={index}>{items}</li>
        })
       }
      </div>
  )
}

export default child3;