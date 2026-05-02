import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';
import Services from './pages/Services';
import Service from './pages/Service';

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

    const services = [
    {
      serviceId: 'html',
      price: 8.5,
      title: 'HTML',
      descr: 'Aprasymas pagal poreiki',
    },
    {
      serviceId: 'css',
      price: 12.0,
      title: 'CSS',
      descr: 'Aprasymas pagal poreiki',
    },
    {
      serviceId: 'js',
      price: 8.5,
      title: 'JavaScript',
      descr: 'Aprasymas pagal poreiki',
    },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services services={services} />} />
            <Route path="/services/:serviceId" element={<Service services={services} />} />
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
