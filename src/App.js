import { BrowserRouter as Router, Routes, Route, useLocation,Navigate } from 'react-router-dom';
import Navbar from './component/navbar';
import Card from './pages/card';
import Card2 from './pages/card2';
import Home from './pages/home';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
      <Navbar />
      <div className={isHomePage ? '' : 'pt-16'}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/card2" element={<Card2 />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
