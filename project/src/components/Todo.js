import React from "react";

const Todo = props => {
    console.log(props);
    return (
        <div onClick={() => props.toggleItem(props.item.id)} className={`item${props.item.completed ? ' completed' : ''}`}>
            <h1>{props.item.todo}</h1>
        </div>
    )
} 

export default Todo;