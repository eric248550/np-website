import * as React from "react";
import { Routes, Route } from "react-router-dom";

import HomeLayout from './layout/HomeLayout';
import Home from './pages/Home';
import About from './pages/About';
import Countdown from './pages/Countdown';
import Mint from './pages/Mint';

import './App.css';

export default function App() {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
            
      <Routes>
            <Route path="/" element={<HomeLayout />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="mint" element={<Mint />} />

                <Route path="*" element={<Home />} />
            </Route>
      </Routes>
    </div>
  );
}

