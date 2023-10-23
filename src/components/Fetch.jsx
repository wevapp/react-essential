import { useState, useEffect } from "react" 

const Fetch = () => {
    const [count, setCount] = useState(0) // This varibale is a dependencies of useEffect, every time it change(click), it will run useEffect (refer to console log)

    const [todos, setTodo] = useState([""]) // this variable storing data from json using fetch

   // Use useEffect to cut infinite loop
   useEffect(() => { 
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            if (!res.ok) {
            throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(jsonData => {         // Ang jsonData ay isang variable na naglalaman ng 
            setTodo(jsonData);    // JSON data mula sa response body ng network request.
        })
        .catch(error => {
            console.error('Error:', error);
        });
            console.log(todos)
    },[count]) // <- Dependencies

  return ( 
    <div>
        <h1>Fetching data { count } Times Display in Console</h1>
        <br />
        <ul>
            {todos.map((todo,index)=>(
                <li key={index}>
                    ID: {todo.id} | Title: {todo.title} | User ID: {todo.userId} | Completed: {todo.completed ? "False" : "True"}
                </li>
            ))}
            <br />
            <button className="border-2 border-blue-400 p-1" onClick={() => setCount(count + 1)}>useEffectDefendencies</button>
        </ul>
    </div>
  )
}

export default Fetch