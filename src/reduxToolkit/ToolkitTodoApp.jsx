import { useState } from "react"
import ToolkitTodoItem from "./ToolkitTodoItem"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "./todoSlice"



const ToolkitTodoApp = () => {

  const dispatch = useDispatch()
  
  const [text, setText] = useState("")

  const todos = useSelector((state) => state.todoReducer)

  const handleAdd = () => {
    if(!text.trim()) return
    dispatch(addTodo(text.trim()))
    setText("")
  }

  

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
          {todos.map((t) => (
            <ToolkitTodoItem key={t.id} todo={t} />
          ))}
        </div>
        
    </div>
  )
}

export default ToolkitTodoApp