// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/layout';
import Dashboard from './pages/dashboard';
import Reports from './pages/reports';
import Settings from './pages/settings';

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Layout />}>
        
        <Route index element={<Dashboard />} /> 
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />

        
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Route>
    </Routes>
  );
}

export default App;
