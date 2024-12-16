import React from 'react'

const Todo = ({ id, task, removeTodo }) => {
  return (
    <li>
      <div>
        {task}
        <button onClick={() => removeTodo(id)}>X</button>
      </div>
    </li>
  )
}

export default Todo