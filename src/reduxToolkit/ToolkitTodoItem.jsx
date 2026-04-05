import { useDispatch } from "react-redux"
import { remove, toggle } from "./todoSlice"




const ToolkitTodoItem = ({todo}) => {

  const dispatch = useDispatch()

  return (
    <div>
        <h2>ToolkitTodoItem</h2>
        <input type="checkbox" checked={todo.done} onChange={() => dispatch(toggle(todo.id))} />
        <span>{todo.text}</span>
        <button onClick={() => dispatch(remove(todo.id))} >X</button>
    </div>
  )
}

export default ToolkitTodoItem