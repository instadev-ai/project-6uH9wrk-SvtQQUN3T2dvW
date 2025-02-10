import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Index';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div dir="rtl" className="min-h-screen font-heebo">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
