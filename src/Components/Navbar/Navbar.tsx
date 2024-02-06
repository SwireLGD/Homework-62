import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink></li>
        <li><NavLink to="/aboutMe" className={({ isActive }) => isActive ? 'active' : undefined}>About Me</NavLink></li>
        <li><NavLink to="/contacts" className={({ isActive }) => isActive ? 'active' : undefined}>Contacts</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;