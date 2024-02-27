import React, { useState } from 'react';
import './App.css';

function App() {
  let [inputtodo, setinputtodo] = useState('');
  let [todolist, settodolist] = useState([
    {
      id: 1,
      task: 'react'
    },
    {
      id: 2,
      task: 'react'
    }
  ]);
  let [nxtId, setNxtId] = useState(3); // Using state to manage nxtId

  function onaddTodoElemnt() {
    if (inputtodo === '') {
      alert('Add Some Task');
    } else {
      let newTodo = [
        ...todolist,
        {
          id: nxtId,
          task: inputtodo
        }
      ];
      settodolist(newTodo);
      setinputtodo('');
      setNxtId(nxtId + 1); // Incrementing nxtId when adding a new todo
    }
  }

  function ondeletetodo(id) {
    let newTodoslist = todolist.filter((todo) => todo.id !== id);
    settodolist(newTodoslist);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <div className='container'>
        <input
          type='text'
          value={inputtodo}
          onChange={(event) => {
            let inputValue = event.target.value;
            setinputtodo(inputValue);
          }}
        />
        <button className='button' onClick={onaddTodoElemnt}>
          Add
        </button>
      </div>
      <div>
        <ul>
          {todolist.map((todo) => {
            return (
              <li key={todo.id} className='list-group'>
                <p className='para'>{todo.task}</p>
                <button className='into-button' onClick={() => ondeletetodo(todo.id)}>
                  ❌
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
