import React, { useState } from "react";
import Todoitem from "./Todoitem";
import styles from "./todo.module.css"

const Todo = () => {
    
    let [value,setvalue] =useState("")

    const [todos,setTodos] =useState([])

  

    return (
        <div>
    Todo
        <input value={value} 
        onChange={(e) => setvalue(e.target.value)}/>
        <button onClick={() =>
            {
                setTodos([
                    ...todos,
                    {value: value}
                ]);
            setvalue("")
            }}>Add</button>
            <div className={styles.todoList}>
            
        


        {todos.map((todo) => (
            <Todoitem key={todo.id} todo={todo} />
            // <div>{todo.value}</div>

        ))}
        </div>
        </div>
    );
}

export default Todo

