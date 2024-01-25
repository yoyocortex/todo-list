import React from 'react'

export default function TodoItem(props) {
    return (
        <li key={props.id} className="list-row">
            <div className="checkmark-label">
                <label className="label-container" >
                    <input type="checkbox" defaultChecked={props.completed} onChange={e => props.toggleTodo(props.id, !props.completed)}></input>
                    <div className="checkmark"></div>
                </label>
            </div>
            <div className="item-label">{props.title}</div>
            <button className="btn-delete" onClick={() => props.deleteTodo(props.id)}>Delete</button>
        </li>
    )
}
