import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "./context/LanguageContext";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Blog from "./pages/Blog";
import "./App.css";

function Home() {
  return (
    <div className="container">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Analytics />
      </LanguageProvider>
    </BrowserRouter>
  );
}
