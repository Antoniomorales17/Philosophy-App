import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, Filosofos, Plan } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/filosofos" element={<Filosofos />} />
      <Route path="/plan" element={<Plan />} />
      <Route path="/" element={
        <>
          <Header />
          <AboutUs />
          <SpecialMenu />
          <Chef />
          <Intro />
          <Laurels />
          <Gallery />
          <FindUs />
          <Footer />
        </>
      } />
    </Routes>
  </Router>
);

export default App;