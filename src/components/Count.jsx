import React, { useState } from 'react'

const Count = () => {
     const [count, setCount] = useState(0)
     const increment = () => {
        setCount(count + 1)
     }

     const [user, setUser] = useState('')
     const handleOnchange = (e) => {
        setUser(e.target.value)
     }

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <br />
        <p>User: {user}</p>
        <input name='user' onChange={handleOnchange} value={user} />
    </div>
  )
}

export default Count