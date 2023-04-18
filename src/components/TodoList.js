import TodoShow from "./TodoShow"
import useTodosContext from "../hooks/use-todos-context"

function TodoList() {
  const { todos } = useTodosContext()
  const renderTodos = todos.map((todo)=> {
    return <TodoShow todo={todo} key={todo.id} />
  })
  return <div>{renderTodos}</div>
}

export default TodoList
