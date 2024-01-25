import React from 'react'
import { useState } from "react"

export default function NewTodoForm(props) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return

    props.onSubmit(newItem)

    setNewItem("")
  }

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form_details">ToDo List</div>
      <div className="container">
      <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          placeholder=" Item"
          className="input"
          type="text" />
        <button className="btn">Add</button>
      </div>
    </form>
  )
}