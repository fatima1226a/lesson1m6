import { useState } from "react"
import { useTodoStore } from "./useTodoStore"





const TodoItem = ({todo}) => {

  const { toggle, remove, editTodo } = useTodoStore()
  
  const [isEditing, setIsEditing] = useState(false)
  const [newText, setNewText] = useState(todo.text)

  const handleSave = () => {
    if(!newText.trim()) return 
    editTodo({id: todo.id, text: newText})
    setIsEditing(false)
  }

  return (
    <div>
        <h2>TodoItem</h2>
        <input 
            type="checkbox" 
            checked={todo.done}
            onChange={() => toggle(todo.id)}
        />
        {isEditing ? (
          <input 
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
            onBlur={handleSave} 
            onKeyDown={(e) => e.key === "Enter" && handleSave()} 
          /> 
        ) : (
          <span onDoubleClick={() => setIsEditing(true)} >{todo.text}</span>
        )}
        {/* <span>{todo.text}</span> */}
        <button onClick={() => remove(todo.id)}>X</button>
    </div>
  )
}

export default TodoItem