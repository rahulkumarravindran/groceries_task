import { useState } from 'react';
import './App.css';
import Body from './components/Body.js'

function App() {
  const tempUserList=['Naveen','Ajay','Rahul','Ritika','Vidhyu','Abishek'];
  const [addTaskFlag,setAddTaskFlag]=useState(false)
  return (
    <div className="App">
      <div className='Container'>
        <div className='Header'>
          <h3>Groceries</h3>
          <h3>Tasks</h3>
        </div>
        <Body tempUserList={tempUserList} addTaskFlag={addTaskFlag} setAddTaskFlag={setAddTaskFlag}/>
      </div>
    </div>
  );
}

export default App;
