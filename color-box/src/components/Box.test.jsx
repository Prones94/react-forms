import { render, screen } from "@vitejs/plugin-react"
import Box from "./Box"

test("renders Box without crashing", () => {
  render(<Box id={1} width={100} height={100} backgroundColor="red" removeBox={() => {}}/>)
})

test("matches snapshot", () => {
  const { asFragment } = render(<Box id={1} width={100} height={100} backgroundColor="red" removeBox={() => {}} />)
  expect(asFragment()).toMatchSnapshot()
})