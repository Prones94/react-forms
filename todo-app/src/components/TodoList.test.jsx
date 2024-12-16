import { render, screen, fireEvent } from "@testing-library/react"
import TodoList from "./TodoList"

test("renders TodoList without crashing", () => {
  render(<TodoList />)
})

test("allow user to add a todo", () => {
  render(<TodoList />)

  fireEvent.change(screen.getByLabelText(/Task:/i), { target: { value: "New Task"}})
  fireEvent.click(screen.getByText(/Add Todo/i))

  expect(screen.getByText(/New Task/i)).toBeinTheDocument()
})

test("allows user to remove a todo", () => {
  render(<TodoList />)

  fireEvent.change(screen.getByLabelText(/Task:/i), { target: { value: "New Task"}})
  fireEvent.click(screen.getByText(/Add Todo/i))
  fireEvent.click(screen.getByText(/X/i))

  expect(screen.queryByText(/New Task/i)).not.toBeinTheDocument()
})