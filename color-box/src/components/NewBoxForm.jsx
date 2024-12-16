import React, { useState } from 'react';

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { width: "", height: "", backgroundColor: "" }
  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData((data) => ({ ...data, [name]: value}))
  }

  const handleSubmit = e => {
    e.preventDefault()
    addBox({
      id: Date.now(),
      ...formData
    })
    setFormData(INITIAL_STATE)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:</label>
      <input type="number" name="width" id="width" value={formData.width} onChange={handleChange} />

      <label htmlFor="width">Height:</label>
      <input type="number" name="height" id="height" value={formData.height} onChange={handleChange}/>

      <label htmlFor="backgroundColor">Background Color:</label>
      <input type="text" name="backgroundColor" id="backgroundColor" value={formData.backgroundColor} onChange={handleChange} />

      <button type="submit">Add Box</button>
    </form>
  )
}

export default NewBoxForm