import TodosContext from '../context/todos'
import { useContext } from "react"

function useTodosContext() {
  return useContext(TodosContext)
}

export default useTodosContext
