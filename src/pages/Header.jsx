import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <div className="container">
        <p className="header_logo">LOGO</p>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="*">Page 404</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
