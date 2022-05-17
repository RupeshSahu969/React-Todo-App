import React from "react";

import { useState } from "react";

import styles from "./todo.module.css";


const Todoitem = ({todo , onDelete }) => {
    const [isCompleted , setIsCompleted] =useState(todo.isCompleted);

    return (
        <div className={styles.todo} key={todo.id}>

        <input
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => {
            setIsCompleted(e.target.checked);
        }}
        />

        <div>{todo.value}</div>
        <button  onClick={onDelete}>Delete</button>
        </div>
    );
}

export default Todoitem;















