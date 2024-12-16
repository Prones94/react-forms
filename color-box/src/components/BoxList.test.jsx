import { render, screen, fireEvent } from "@testing-library/react"
import BoxList from "./BoxList"

test("renders BoxList and adds a box", () => {
  render (<BoxList />)

  fireEvent.change(screen.getByLabelText(/Width:/i), { target: { value: "100"}})
  fireEvent.change(screen.getByLabelText(/Height:/i), { target: { value: "100"}})
  fireEvent.change(screen.getByLabelText(/Background Color:/i), { target: { value: "green"}})

  fireEvent.click(screen.getByText(/Add Box/i))
  expect(screen.getByText(/X/i)).toBeInTheDocument()
})

test("removes a box when 'X' button is clicked", () => {
  render(<BoxList />)
  fireEvent.change(screen.getByLabelText(/Width:/i), {target: { value: "100"}})
  fireEvent.change(screen.getByLabelText(/Height:/i), {target: { value: "100"}})
  fireEvent.change(screen.getByLabelText(/Background Color:/i), {target: { value: "green"}})

  fireEvent.click(screen.getByText(/Add Box/i))
  expect(screen.getByText(/X/i)).toBeInTheDocument()
})

test("removes a box when 'X' button is clicked", () => {
  render(<BoxList />)
  fireEvent.change(screen.getByLabelText(/Width:/i), {target: { value: "100"}})
  fireEvent.change(screen.getByLabelText(/Background Color:/i), {target: { value: "red"}})

  fireEvent.click(screen.getByText(/Add Box/i))
  fireEvent.click(screen.getByText(/X/i))

  expect(screen.queryByText('/X/i')).not.toBeInTheDocument()
})