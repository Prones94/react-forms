import { render, scree, fireEvent } from "@testing-library/react"
import NewBoxForm from "./NewBoxForm"

test("renders NewBoxForm without crashing", () => {
  render(<NewBoxForm addBox={() => {}} />)
})

test("allows user to fill form and submit", () => {
  const addBox = jest.fn()
  render(<NewBoxForm addBox={addBox} />)

  fireEvent.change(screen.getByLabelText(/Width:/i), {target: {value: "100"}})
  fireEvent.change(screen.getByLabelText(/Height:/i), {target: {value: "100"}})
  fireEvent.change(screen.getByLabelText(/Background Color:/i), {target: {value: "blue"}})

  fireEvent.click(screen.getByText(/Add Box/i))
  expect(addBox).toHaveBeenCalledWith(expect.objectContaining({
    width: "100",
    height: "100",
    backgroundColor: "blue"
  }))

})