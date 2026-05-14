import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AppRoutes from './routes/AppRoutes';
import Loader from './components/common/Loader';
import './styles/globals.css';

/* ── App ──────────────────────────────────────────────────── */
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <AppRoutes key="app" />
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
