// src/components/NavBar.jsx
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333' }}>
      <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0 }}>
        <li style={{ marginRight: '15px' }}>
          {/* Link is used for navigation */}
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Dashboard
          </Link>
        </li>
        <li style={{ marginRight: '15px' }}>
          <Link to="/reports" style={{ color: 'white', textDecoration: 'none' }}>
            Reports
          </Link>
        </li>
        <li>
          <Link to="/settings" style={{ color: 'white', textDecoration: 'none' }}>
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;