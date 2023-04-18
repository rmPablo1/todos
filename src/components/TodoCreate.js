
import { useState } from "react"
import useTodosContext from "../hooks/use-todos-context"

function TodoCreate() {
  const [value, setValue] = useState('')
  const { createTodo } = useTodosContext()

  const handleSubmit = (event) => {
    event.preventDefault()
    createTodo(value)
    setValue('')
  }

  const handleChange = (event) =>{
    console.log(event.target.value)
    setValue(event.target.value)
  }
  return <div>
    <form className="control is-flex" onSubmit={handleSubmit}>
      <input className="input" placeholder="Write your Todo!" onChange={handleChange} value={value} />
      <button className="button is-primary is-inverted m-auto">Save</button>
    </form>
  </div>
}

export default TodoCreate
