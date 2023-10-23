import React from 'react'

const Reduce = () => {
    const people = [
        { id: 1, name: "John", age: 30, paid: 250 },
        { id: 2, name: "Alice", age: 25, paid: 250 },
        { id: 3, name: "Bob", age: 35, paid: 200 }
      ]

    //   Reduce Method
    const totalCost = people.reduce((total, paid) => {
            total = total + paid.paid
            return total
    },0)

  return (
    <div>
        <h4>Total Cash: {totalCost}</h4>
    </div>
  )
} // Output -> Total Cash: 700

export default Reduce