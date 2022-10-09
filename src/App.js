import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          {/* <Route path="page1" element={<Page1 />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="detail/:id" element={<Detail />} />
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
