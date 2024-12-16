import { render, screen, fireEvent } from "@testing-library/react"
import NewTodoForm from "./NewTodoForm"

test("renders NewTodoForm without crashing", () => {
  render(<NewTodoForm addTodo={() => {}} />)
})

test("allows user to fill form and submit", () => {
  const addTodo = jest.fn()
  render(<NewTodoForm addTodo={addTodo} />)

  fireEvent.change(screen.getByLabelText(/Task:/i), {target: { value: "New Task"}})
  fireEvent.click(screen.getByText(/Add Todo/i))

  expect(addTodo).toHaveBeenCalledWith(expect.objectContaining({ task: "New Task"}))
})