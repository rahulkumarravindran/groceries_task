
const Body = (props) => {
    return (
        <>
        <button>Add</button>
        <form>
            <input type='text' placeholder='Enter the task'></input>
            <select>
                {props.tempUserList.map((user)=>{return( <option>{user}</option>)})}
            </select>
            <input type="submit"></input>
        </form>
        </>
    );
}

export default Body