import useTodosContext from "../hooks/use-todos-context"
import { useState } from "react"
import TodoEdit from "./TodoEdit"
function TodoShow({todo}) {
  const [showEdit, setShowEdit] = useState(false)
  const { deleteTodoById } = useTodosContext()

  const handleClick = () =>{
    deleteTodoById(todo.id)
  }

  const handleSubmit = () => {
    setShowEdit(false)
  }

  const handleShowEdit = () =>{
    setShowEdit(true)
  }

  let content = todo.description
  if (showEdit){
    content = <TodoEdit onSubmit={handleSubmit} todo={todo}/>
  }
  return (
    <div className="box is-flex mt-3">
      <h2 className="is-flex-grow-1">{content}</h2>
      <button className="button is-danger is-light" onClick={handleClick}>Delete</button>
      <button className="button is-info is-light" onClick={handleShowEdit}>Edit</button>
      </div>
    )
}

export default TodoShow
