import { useState } from 'react';
import './App.css';
import Body from './components/Body.js'
import DisplayList from './components/DisplayList.js'

function App() {
  //state for storing the tasks
  const [taskList,setTaskList] = useState([])
  //state for storing the grocery list
  const [groceriesList,setGroceriesList]= useState([])
  //List of predefined members of the household
  const tempUserList=['Naveen','Ajay','Rahul','Ritika','Vidhyu','Abishek'];
  const [TaskFlag,setTaskFlag]=useState(false)
  const [addButtonFlag,setAddButtonFlag]=useState(false)

  const addTask = (task) =>{
    
  }
  return (
    <div className="App">
      <div className='Container'>
        <div className='Header'>
          <h3 className={TaskFlag ? 'UnSelectedTab' : 'SelectedTab'} onClick={TaskFlag ? ()=>setTaskFlag(!TaskFlag): ()=>setTaskFlag(TaskFlag)}>Groceries</h3>
          <h3 className={TaskFlag ? 'SelectedTab' : 'UnSelectedTab'} onClick={TaskFlag ? ()=>setTaskFlag(TaskFlag) : ()=> setTaskFlag(!TaskFlag)}>Tasks</h3>
        </div>
        <Body tempUserList={tempUserList} TaskFlag={TaskFlag} setTaskFlag={setTaskFlag} addButtonFlag={addButtonFlag} setAddButtonFlag={setAddButtonFlag} taskList={taskList} addTask={addTask}/>
        <DisplayList taskList={taskList} setTaskList={setTaskList}/>
      </div>
    </div>
  );
}

export default App;
