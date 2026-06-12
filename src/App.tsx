import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { LanguageProvider } from "./context/LanguageContext";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Analytics />
        <SpeedInsights />
      </LanguageProvider>
    </BrowserRouter>
  );
}
