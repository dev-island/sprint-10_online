import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('Andrew');
  const myName = 'Andrew'
  function handleClick() {
    setName('Katie')
  }
  return (
    <div className="App">
      <h1>I'm the title</h1>
      <p>{name}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
