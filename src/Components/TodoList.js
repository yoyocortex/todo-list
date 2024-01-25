import React from 'react'
import TodoItem from "./TodoItem"

export default function TodoList(props) {
    console.log(props.todos)
    return (
        <ul className="list">
            {/* props.todos && props.todos.length ? -> check if todos exists before rendering to prevent page break */}
            {props.todos.map(todo => {
                return (
                    <TodoItem
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    key={todo.id}
                    toggleTodo={props.toggleTodo}
                    deleteTodo={props.deleteTodo}
                    />
                );
            })}
        </ul>
    )
}
