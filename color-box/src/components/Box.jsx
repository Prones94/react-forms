import React from 'react'

function Box({ id, width, height, backgroundColor, removeBox }){
  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor,
    margin: "10px"
  }

  return (
    <div>
      <div style={boxStyle}></div>
      <button onClick={() => removeBox(id)}>X</button>
    </div>
  )
}

export default Box