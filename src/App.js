import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout"
import Home from "./pages/page1";
import About from "./pages/page2";
import Contact from "./pages/page3";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          {/* <Route path="page1" element={<Page1 />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// function Home() {
//   return <h1>Home</h1>;
// }

// function About() {
//   return <h1>test</h1>;
// }
