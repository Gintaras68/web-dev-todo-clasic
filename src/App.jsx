import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import About from './pages/About';
import Services from './pages/Services';

function App() {
  // const [name, setName] = useState('');
  // const [surname, setSurname] = useState('');
  // const finalText = `${name} ${surname}`.trim();

  // function updateName(event) {
  //   setName(event.target.value);
  // }
  //   function updateSurname(event) {
  //   setSurname(event.target.value);
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <div className="form">
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
      </div> */}
    </div>
  );
}

export default App;
