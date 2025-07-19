import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import ListProperty from './pages/ListProperty';
import HostelListingPage from './pages/HostelListingPage';
import FilterSidebar from './components/FilterSidebar';
import TermsPage from './pages/TermsPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/list-property" element={<ListProperty />} />
        <Route path="/hostels" element={<HostelListingPage />} />
        <Route path="/filters" element={<FilterSidebar />} />  
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
