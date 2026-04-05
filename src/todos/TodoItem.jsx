import { useTodoStore } from "../todosZustand/useTodoStore"





const TodoItem = ({todo}) => {

  const { toggle, remove } = useTodoStore()

  return (
    <div>
        <h2>TodoItem</h2>
        <input 
            type="checkbox" 
            checked={todo.done}
            onChange={() => toggle(todo.id)}
        />
        <span>{todo.text}</span>
        <button onClick={() => remove(todo.id)}>X</button>
    </div>
  )
}

export default TodoItem