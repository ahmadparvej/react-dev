import { useState } from "react";

let Button =()=>{
    const [count,setCount]=useState(0);
    const handleInc=()=>{
        setCount(count+1)
    }
    const handleDec=()=>{
        setCount(count-1)
    }
    const hendledbClick=()=>{
        setCount(count*2)
    }
    return (
        <>
        <h1>{count}</h1>
        <button onClick={()=>handleInc()} onDoubleClick={()=>hendledbClick()}>Inc</button>
        <button onClick={()=>handleDec()} >Dec</button>
        </>
    )
}

export default Button;