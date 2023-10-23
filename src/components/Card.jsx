import React, { useState } from 'react'
import './css/card.css' // import css

const Card = ({name, age, gender}) => { //const Card = (props) or direct inside
   // const {name, age, gender} = props // Destructuring using props
  
   const [count, setCount] = useState(0)
   const increment = () => {
    setCount(count + 1)
   } 

   return (
    <div className='card'>
        <h3>Title: BSIT</h3>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Gender: {gender}</div>
        <div>
          <p>Count: {count}</p>
          <button onClick={increment}>Add To Card</button>
        </div>
    </div>
  )
}

export default Card