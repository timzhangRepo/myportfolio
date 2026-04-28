import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "./context/LanguageContext";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import "./App.css";

export default function App() {
  return (
    <LanguageProvider>
      <div className="container">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </div>
      <Analytics />
    </LanguageProvider>
  );
}
