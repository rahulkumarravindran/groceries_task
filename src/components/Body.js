import { useState } from "react";

const Body = (props) => {

    //Local states
    const [task,setTask] = useState('');
    const [assignee,setAssignee]= useState('');
    const [item,setItem]=useState('')
    //Function for adding the new task
    const submitTask = (e) => {

        //preventing the default of submitting to a page
        e.preventDefault();
        //for groceries
        if(props.addTaskFlag===true){
            
        }
        //for tasks
        else{

        }

    }
    return (
        <>
        <button onClick={()=> props.setAddButtonFlag(!props.addButtonFlag)}>{!props.TaskFlag ? 'Add new Item' : 'Add new Task'}</button>
        {!props.addButtonFlag ? '': <form onSubmit={submitTask}>
            {!props.TaskFlag ? <><input type='text' placeholder="Name of the item"  onChange={(e)=>{setTask(e.target.value)}}></input></>:<><input type='text' placeholder='Enter the task' onChange={(e)=>{setItem(e.target.value)}}></input>
            <select onChange={(e)=>{setAssignee(e.target.value)}}>
                {props.tempUserList.map((user)=>{return( <option>{user}</option>)})}
            </select></>}
            <input type="submit"></input>
        </form>}
        </>
    );
}

export default Body