import React,{useState} from 'react';
import './App.css'

function App(){ 
let [todoInput, settododInput] = useState()
let [todoList,settodolist] = useState([
  {
    id : 1 ,
    task : 'Learn React' 
  },
  {
    id : 2 ,
    task : 'Learn Webdevelopment'
  }
])

let nxtId = 3 
function onAddtodod(){
  if(todoInput=== "") {
    alert('Add Some Task')
  }
  else{
    let newTodos = [
      ...todoList,
      {
        id : nxtId++,
        task : todoInput
      }
    ]

    settodolist(newTodos)
    settododInput('')
  }
}

function onDeletetodo(id){
  let updatedtodolist = todoList.filter((todo)=> {
   return todo.id !== id
  })
  settodolist(updatedtodolist)
}

  return(
    <div> 
   <h1 className='heading'>Todo App</h1>
    
<diV className='container'>
  
  <input type='text' value={todoInput} onChange={(event)=> {
    let task = event.target.value 
    settododInput(task)
  }}/>
  <button className='button' onClick={()=>{
    onAddtodod()
  }}>Add</button>
</diV> 
<ul>
  {
    todoList.map((todo) => {
      return(
        <li className='list-style' onChange={(event)=>{
          let task = event.target.value
          settodolist(task)
        }}>
        <p>{todo.task}</p>
        <button onClick={()=>{
          onDeletetodo(todo.id)
        }}>❌</button>
      </li>
      )
    })
  }
</ul>
    </div>
  )
}
export default App
