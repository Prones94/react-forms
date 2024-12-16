import React, { useState } from 'react';

const NewTodoForm = ({addTodo}) => {
  const INITIAL_STATE = { task: "" }
  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData((data) => ({ ...data, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    addTodo({
      id: Date.now(),
      ...formData
    })
    setFormData(INITIAL_STATE)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input type="text" name="task" id="task" value={formData.task} onChange={handleChange}/>
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default NewTodoForm