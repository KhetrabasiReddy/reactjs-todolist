import { useState } from "react";

const TodoInput = (props) => {
    const {handleAddTodos,todoValue,setTodoValue} = props;
   
    function handleChange(e){
        setTodoValue(e.target.value);
    }
  return (
    <header>
        <input value={todoValue} onChange={handleChange} placeholder="Enter todo..." />
        <button onClick={()=>{
            handleAddTodos(todoValue);
            setTodoValue('');
        }}>Add</button>
    </header>
  )
}

export default TodoInput;