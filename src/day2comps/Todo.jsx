import React,{useState} from 'react'

let Todo=()=>{
    const [task,setTask]=useState("");
    const [todo,setTodo]=useState([]);
    
    const handleClick=(e)=>{
        setTask(e.target.value)
    }


    return (
        <>
            <input type={"text"} value={task} placeholder="type something" onChange={handleClick}/>
            <button>Add</button>
        </>
    )
}

export default Todo;