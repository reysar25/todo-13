import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Todos from './components/Todos';
import { TODOS } from './data/data';

function App() {
  const [todos, setTodos] = useState(TODOS);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setTodos([...todos, {
      id: todos.length + 1,
      body: input
    }]);
    setInput('');
  };

  return (
    <div className="app">
      <form onSubmit={addTodo}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo..."
          required
        />
        <button>Add Todo</button>
      </form>

      <h2>My todos</h2>
      <Todos todos={todos} setTodos={setTodos} />
      
      <div className="buttons">
        <Button />
        <Button greeting="jambo" />
        <Button greeting="konichiwa" />
      </div>
    </div>
  );
}

export default App;