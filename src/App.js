import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from './components/Navbar';
import Home from './Routes/Home';
import Student from './Routes/Student';
import AddStudent from './Routes/AddStudent';
import EditStudent from './Routes/EditStudent';
import NotFound from './Routes/NotFound';
import Footer from './components/Footer';

const AppWrapper = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/student" element={<Student />} />
        <Route path="/student/:id" element={<EditStudent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {location.pathname !== '/404' && <Footer />} {/* Render Footer on all pages except Not Found */}
    </div>
  );
};

const App = () => (
  <>
    <AppWrapper />
  </>
);

export default App;
