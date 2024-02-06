import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
      <h1>Swire</h1>
      <nav>
        <ul className='navList'>
          <li className='navItem'><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink></li>
          <li className='navItem'><NavLink to="/aboutMe" className={({ isActive }) => isActive ? 'active' : undefined}>About Me</NavLink></li>
          <li className='navItem'><NavLink to="/contacts" className={({ isActive }) => isActive ? 'active' : undefined}>Contacts</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;