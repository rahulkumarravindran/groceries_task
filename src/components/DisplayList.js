

const DisplayList = (props) => {
    return (<>
    {props.taskList.map((task)=>{<><h3>{task}</h3></>})}
    </>)
}

export default DisplayList;