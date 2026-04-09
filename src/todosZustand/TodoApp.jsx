import { useState } from "react"
import TodoItem from "./TodoItem"
import { useTodoStore } from "./useTodoStore"



const TodoApp = () => {

  const [text, setText] = useState("")

  const [filter, setFilter] = useState("all")

  const { addTodo, todos } = useTodoStore()

  const handleAdd = () => {
    if(!text.trim()) return
    addTodo(text.trim())
    setText("")
  }


  const filteredTodos = todos.filter ((t) => 
    {
      if (filter === "active") return !t.done
      if (filter === "done") return t.done
      return true
    })
  

  return (
    <div>
        <h2>TodoApp</h2>
        <input 
          onChange={(e) => setText(e.target.value)}
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

          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
        <button onClick={() => setFilter("all")} >Все</button>
        <button onClick={() => setFilter("active")} >Активные</button>
        <button onClick={() => setFilter("done")} >Выполненные</button>
    </div>
  )
}

export default TodoApp