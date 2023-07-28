import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';


function MasterTodo(props) {

    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
      console.log(todos);
    }, [todos]);
    
    function submitHandler(event) {
      event.preventDefault();
      setTodos([...todos, { title: input, completed: false }]);
    }
    
    const deleteItem = (index) => {
      const updatedTodos = todos.filter((_, i) => i !== index);
      
      setTodos(updatedTodos);
    };


    return (

    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      {todos.map((todo, index) => (
        <TodoList index={index} todo={todo} deleteItem={deleteItem}></TodoList>
      ))}

    </div>
    );
}

export default MasterTodo;