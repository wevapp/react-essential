import React from 'react'

const Mapping = () => {

    const people = [
        { id: 1, name: "John", age: 30, paid: true },
        { id: 2, name: "Alice", age: 25, paid: false },
        { id: 3, name: "Bob", age: 35, paid: true }
      ]

  return (
    <div>
        {people.map((tao,) => (
        <ul>
            <li key={tao.id}>
              <p>Id: {tao.id}</p>
              <p>Name: {tao.name}</p>
              <p>Age: {tao.age}</p>
              <p>Paid: {tao.paid ? 'True':'False'}</p>
            </li>
        </ul>
        ))}
    </div>
  )
}

export default Mapping