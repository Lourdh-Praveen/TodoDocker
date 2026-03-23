import React, { useState } from "react";
import TodoListComp from "./TodoListComp";

function Todocomp(){
    const [input,setInput]=useState('');
    const [list,setList]=useState(['dfdg','dd']);

    const addList=()=>{
        if(input.trim() === " ") return;
        setList([...list,input]);
        setInput('')
    }

  
    return(
        <>
        <div>todo list</div>
        <label>Enter the task</label>
        <input type="text"  value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={addList}>ADD task </button>
        <TodoListComp list={list} />
        </>
    )
}

export default Todocomp;