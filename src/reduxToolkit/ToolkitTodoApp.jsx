import { useState } from "react"
import ToolkitTodoItem from "./ToolkitTodoItem"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "./todoSlice"



const ToolkitTodoApp = () => {

  const dispatch = useDispatch()

  const [filter, setFilter] = useState("all")
  
  const [text, setText] = useState("")

  const todos = useSelector((state) => state.todoReducer)

  const handleAdd = () => {
    if(!text.trim()) return
    dispatch(addTodo(text.trim()))
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
        <h2>ToolkitTodoApp</h2>
        <input 
          type="text" 
          placeholder="Новая задача..." 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd() }
        />
        <button onClick={handleAdd} >Добавить</button>
        <div>
          {todos.length === 0 && (
            <p>Список пуст...</p>
          )}
          {filteredTodos.map((t) => (
            <ToolkitTodoItem key={t.id} todo={t} />
          ))}
        </div>
        <button onClick={() => setFilter("all")} >Все</button>
        <button onClick={() => setFilter("active")} >Активные</button>
        <button onClick={() => setFilter("done")} >Выполненные</button>
    </div>
  )
}

export default ToolkitTodoApp