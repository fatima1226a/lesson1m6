import { useState } from "react"
import TodoItem from "./TodoItem"
import { useTodoStore } from "../todosZustand/useTodoStore"



const TodoApp = () => {

  const [text, setText] = useState("")

  const { addTodo, todos } = useTodoStore()

  const handleAdd = () => {
    if(!text.trim()) return
    addTodo(text.trim())
    setText("")
  }

  

  return (
    <div>
        <h2>TodoApp</h2>
        <input onChange={(e) => setText(e.target.value)}
          type="text" 
          placeholder="Добавить новую задачу..."
          value={text}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button onClick={handleAdd}>Добавить</button>
        <div> 
          {todos.length === 0 && (
            <p>Список пуст</p>
          )}
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
    </div>
  )
}

export default TodoApp