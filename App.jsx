// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function App() {
  return (
    <>
      <NavBar />
      <div className="content">
        {/* Routes defines the area where components will render based on the URL */}
        <Routes>
          {/* Route for the home path (/) */}
          <Route path="/" element={<Dashboard />} />

          {/* Other routes */}
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />

          {/* Optional: A route for 404/Not Found pages */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </>
  );
}

export default App;