import React, {useState} from 'react';

import './App.css'

function App() { 

  let [mangostate , setmangostate] = useState(0)
  let [Bananastate, setbananana] =useState(0) 

function onmangoEat () {
  setmangostate(mangostate+1)
  
} 

function onbanananEat() {
  setbananana(Bananastate+1)
}


  return(
<div>
<div className='container'>
<div className='card'>
<h1>Bob ate <span>{mangostate}</span> mangoes <span>{Bananastate}</span> Banana</h1> 
<div className='fruits'>
<div>
  <div>
  <img src='https://assets.ccbp.in/frontend/react-js/mango-img.png' alt='mango'/>  
<div>
  <button onClick={onmangoEat}>Eat Mango</button>
</div>
</div> 
</div> 
<div>
  <div>
  <img src='https://assets.ccbp.in/frontend/react-js/banana-img.png' alt='mango'/>  
<div>
  <button onClick={onbanananEat}>Eat Bnanana</button>
</div>
</div> 
</div>
</div>
</div>
    </div>
    </div>
  )
}
export default App;