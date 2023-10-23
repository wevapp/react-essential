import React from 'react'

const Filter = () => {
    
    const people = [
        { id: 1, name: "John", age: 30, paid: true },
        { id: 2, name: "Alice", age: 25, paid: false },
        { id: 3, name: "Bob", age: 35, paid: true }
      ]
      
    //   Filter Method
    const newPeople = people.filter(tao => tao.paid)
    
  return (
    <div>
        <ul>
            {newPeople.map(tao => ( // you need use map method
                <li key={tao.id}>
                    <p>ID: {tao.id}</p>
                    <p>Name: {tao.name}</p>
                    <p>Age: {tao.age}</p>
                    <p>Paid: {tao.paid ? 'True':'False'}</p>
                </li>
            ))}
        </ul>
    </div>
  )
} 
 /* Output
  
  ID: 1
  Name: John
  Age: 30
  Paid: True

  ID: 3
  Name: Bob
  Age: 35
  Paid: True*/

export default Filter