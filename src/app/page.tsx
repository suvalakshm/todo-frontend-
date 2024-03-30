'use client';
import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
}

const Index = () => {
  const [userInput, setUserInput] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [idCounter, setIdCounter] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userInput.trim() !== '') {
      setTodos([...todos, { id: idCounter, text: userInput }]);
      setIdCounter(idCounter + 1);
      setUserInput('');
    }
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
