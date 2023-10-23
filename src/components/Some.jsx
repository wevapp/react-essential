import React from 'react'

const Some = () => {
    const people = [
        { id: 1, name: "John", age: 30, paid: true },
        { id: 2, name: "Alice", age: 25, paid: false },
        { id: 3, name: "Bob", age: 35, paid: true }
      ]

    //   Some Method
    const hasPaid = people.some(tao => tao.paid);

  return (
    <div>
        <h3>People has Paid</h3>
        <p>At least one person has paid: {hasPaid ? 'Yes' : 'No'}</p>
    </div>
  )
} // output -> At least one person has paid: Yes

export default Some

