import React, {useState} from 'react';
import './App.css'
function App() {
let [inputtodo,setinputtodo] = useState('')
let [todolist, settodolist] = useState([])
let nxtId = 3 


function onaddTodoElemnt() {
  if (inputtodo === '') {
    alert('Add Some Task')
  }
  else{
    let newTodo = [
      ...todolist,
      {
        id : nxtId,
        task : inputtodo
      }
    ]

    settodolist(newTodo)
    setinputtodo('')

  }
}

function ondeletetodo(id) {
 let newTodoslist = todolist.filter((todo) => {
      return todo.id !== id
 })

 settodolist(newTodoslist)
}

  return(
    <div>
     <h1>Todo App</h1> 
     <div className='container'>
      <input type='text' value={inputtodo} onChange={(event)=> {
        let inputValue = event.target.value
        setinputtodo(inputValue)
      }}/>
      <button className='button' onClick={()=> {
        onaddTodoElemnt()
      }}>Add</button> 
      </div>
      <div>
            {
              todolist.map((todo) =>{
               return(
                <ul>
                <li className='list-group'>
                <p className='para'>{todo.task}</p>
                 <button className='into-button' onClick={()=> {
                  ondeletetodo(todo.id)
                 } }>❌</button>
                </li>
              </ul> 
               )
              })
            }
      
     </div>
    </div>
  )
}

export default App