import { createContext, useState, useCallback } from "react"
import axios from "axios"

const TodosContext = createContext()

function Provider({children}) {
  const [todos, setTodos] = useState([])

  const createTodo = async (description) => {
    const response = await axios.post("http://localhost:3001/todos",{
      description
    })
    setTodos([...todos, response.data])
  }

  const editTodoById = async (id,newDescription) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`,{
      description: newDescription
    })
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, ...response.data}
      }
      return todo
    })
    setTodos(updateTodos)
  }
  const deleteTodoById = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`)
    const updatedTodos = todos.filter((todo)=>{
      return todo.id !== id
    })
    setTodos(updatedTodos)
  }
  const fetchTodos = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/todos")
    console.log(response)
    setTodos(response.data)
  },[])

  const valueToShare = {
    fetchTodos,
    todos,
    createTodo,
    deleteTodoById,
    editTodoById
  }
  return <TodosContext.Provider value={valueToShare}>
    {children}
  </TodosContext.Provider>
}

export {Provider}
export default TodosContext
