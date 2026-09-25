import React from 'react';
import './App.css';

function App() {
  const [toggle, setToggle] = React.useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  }

  React.useEffect(() => {
    document.title = toggle ? 'Toggle is off' : 'Toggle is on';
  },)


  return (
    <div>
      <h1>Toggle Button</h1>
      <button onClick={handleClick}>
        toggle message
      </button>
      <p>{toggle ? 'Toggle is off' : 'Toggle is on'}</p>
    </div>
  );
}

export default App;
