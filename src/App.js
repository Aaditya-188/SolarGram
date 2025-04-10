import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import Footer from './components/Footer';
import WhySolargram from './components/WhySolargram';
import Mission from './components/Mission';
import Partners from './components/Partners';
import FAQ from './components/FAQ';
import DownFooter from './components/DownFooter';
import UpNext from './components/UpNext';
import GifComponent from "./components/GIF";
import Login from './components/Login';
import Register from "./components/Register";
import BlogSection from './components/BlogSection';
import ContactUs from './ContactUs';
import ConsultationForm from './ConsultationForm';
import AboutUs from './AboutUs';
import Service from './components/Service';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!sessionStorage.getItem("username"));

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Layout />} />
        <Route path="/aboutus" element={<><AboutUs /><Footer /><DownFooter /></>} />
        <Route path="/location" element={<><Mission /><Footer /><DownFooter /></>} />
        <Route path="/enquiry" element={<><ConsultationForm /><Footer /><DownFooter /></>} />
        <Route path="/contactus" element={<><ContactUs /><Footer /><DownFooter /></>} />
        <Route path="/blogs" element={<><BlogSection /><Footer /><DownFooter /></>} />
        <Route path="/services" element={<><Service /><Footer /><DownFooter /></>} />
      </Routes>
    </>
  );
};

export default App;
