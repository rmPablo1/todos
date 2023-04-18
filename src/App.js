import { useEffect } from "react"
import TodoCreate from "./components/TodoCreate"
import TodoList from "./components/TodoList"
import useTodosContext from "./hooks/use-todos-context"
function App() {
  const { fetchTodos } = useTodosContext()

  useEffect (()=>{
    fetchTodos()
  },[fetchTodos])

  return <div className="container">
    <h2 className="has-text-centered is-size-1 mb-5">Todo's</h2>
    <TodoCreate />
    <TodoList />
  </div>
}

export default App
