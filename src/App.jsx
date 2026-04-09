import { Provider } from "react-redux"
import { store } from "./store"
import ToolkitTodoApp from "./reduxToolkit/ToolkitTodoApp"
import TodoApp from "./todosZustand/TodoApp"


function App() {

  return ( 
    <>
      <TodoApp />
      <Provider store={store} >
        <ToolkitTodoApp/>
      </Provider>
    </>
    
  )
}

export default App
