import { useState } from "react"
import useTodosContext from "../hooks/use-todos-context"
function TodoEdit({todo, onSubmit}) {
  const [value, setValue] = useState(todo.description)
  const {editTodoById} = useTodosContext()

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    onSubmit()
    editTodoById(todo.id, value)
  }
  return <form className="is-flex"onSubmit={handleSubmit}>
    <input className="input"onChange={handleChange} value={value}/>
    <button className="button is-success is-light">Save</button>
    </form>
}

export default TodoEdit
