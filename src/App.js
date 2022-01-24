import './styles/App.css'
import './styles/style.css'
import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import Index from './pages/Index';
import Header from './components/Header';
import Footer from './components/Footer';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import DApp from './pages/DApp';


function App() {

  const location = useLocation();


  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/dapp" element={<DApp />} />
      </Routes>

    {!location.pathname.includes('dapp') && (
      <Footer />
    )}
    </div>
  );
}

export default App;
