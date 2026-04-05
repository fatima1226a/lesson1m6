import { Provider } from "react-redux"
import { store } from "./store"
// import { Posts } from "./Posts"
import ToolkitTodoApp from "./reduxToolkit/ToolkitTodoApp"
// import TodoApp from "./todos/TodoApp"


function App() {

  return ( 
  
    // < Posts />
    // <TodoApp/>
    <Provider store={store} >
      <ToolkitTodoApp/>
    </Provider>
  )
}

export default App
