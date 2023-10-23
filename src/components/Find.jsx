import React from 'react'

const Find = () => {
    const people = [
        { id: 1, name: "John", age: 30, paid: true },
        { id: 2, name: "Alice", age: 25, paid: false },
        { id: 3, name: "Bob", age: 35, paid: true }
      ]

    // Find Method use like a search
    const newFind = people.find((tao)  => tao.age === 35)

  return (
    <div>
        <h1>Find Method</h1>
        {newFind ? (
            <div>
                <p>Name: {newFind.name}</p>
                <p>Age: {newFind.age}</p>
                <p>Paid: {newFind.paid ? 'Yes' : 'No'}</p>
            </div>
        ) : ( // Ternary operator
            <p>Person not found.</p>
        )}
    </div>
  )
} // Outpur -> Name: Bob Age: 35 Paid: Yes

export default Find