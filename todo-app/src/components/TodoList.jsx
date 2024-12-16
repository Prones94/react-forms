import React from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const addTodo = newTodo => {
  setTodos((todos) => [...todos, newTodo])
  }

  const removeTodo = id => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
  }

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => {
          <Todo key={todo.id} id={todo.id} task={todo.task} removeTodo={removeTodo} />
        })}
      </ul>
    </div>
  )
}

export default TodoList