import './Header.css';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const navLinkStyles = ({isActive}) => ({
    textDecoration: isActive ? 'underline' : 'none'
  });

  return (
    <header className='header'>
      <div className="container">
        <p className="header_logo">LOGO</p>
        <nav>
          <NavLink to="/" style={navLinkStyles}>Home</NavLink>
          <NavLink to="/services" style={navLinkStyles}>Services</NavLink>
          <NavLink to="/about" style={navLinkStyles}>About</NavLink>
          <NavLink to="*" style={navLinkStyles}>Page 404</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
