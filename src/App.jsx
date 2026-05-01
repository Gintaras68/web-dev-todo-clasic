import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const finalText = `${name} ${surname}`.trim();

  function updateName(event) {
    setName(event.target.value);
  }
    function updateSurname(event) {
    setSurname(event.target.value);
  }

  return (
    <div className="App">
      <div className="form">
        Forma
        <div className="input_line">
          <label htmlFor="name">Name</label>
          <input value={name} onChange={updateName} type="text" id="name" placeholder="first name..." />
        </div>
        <div className="input_line">
          <label htmlFor="surname">Last Name</label>
          <input value={surname} onChange={updateSurname} type="text" id="surname" placeholder="Last name..." />
        </div>
      </div>

      <div>Preview ...

        <p> You entered: "{finalText}"</p>
      </div>
    </div>
  );
}

export default App;
