import React from 'react'
import './app.css'

const App = () => {
  const btnRef = React.useRef(null);

  const changeColor = () => {
    btnRef.current.style.backgroundColor = 'blue';
  };

  return (
    <div>
      <button ref={btnRef}>Button</button>
      <button onClick={changeColor}>Change Colour</button>
    </div>
  )
}

export default App