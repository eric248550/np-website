import * as React from "react";
import { Routes, Route } from "react-router-dom";

import HomeLayout from './layout/HomeLayout';
import Home from './pages/Home';
import About from './pages/About';
import Countdown from './pages/Countdown';

import './App.css';

export default function App() {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
            <Route path="/" element={<HomeLayout />}>
                <Route index element={<Countdown />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />

                <Route path="*" element={<Countdown />} />
            </Route>
      </Routes>
    </div>
  );
}

