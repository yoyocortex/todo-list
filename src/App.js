import NewTodoForm from "./Components/NewTodoForm";
import TodoList from "./Components/TodoList";
import { useEffect, useState } from "react"
import "./index.css"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])


  // arrow function -> delete function keyword (new approach to function definition)
  const addTodo = (title) => {
    setTodos(todos => {
      return [...todos, {
        id: crypto.randomUUID(),
        title,
        completed: false
      }]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(todos => {
      return todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo;
      })
    })
  }

  function deleteTodo(id) {
    setTodos(todos => {
      return todos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="float">
      <NewTodoForm onSubmit={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  )
}