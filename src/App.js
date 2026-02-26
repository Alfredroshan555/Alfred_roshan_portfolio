import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Intro from "./components/Intro/intro";
import About from "./components/About";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import FluidBackground from "./components/shared/Background/FluidBackground";
import Cursor from "./components/shared/Cursor";
import Dock from "./components/Dock";
import Portfolio from "./components/Portfolio";

import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="App">
      <Cursor />
      <FluidBackground />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro />
              <About />
              <Skills />
              <WorkExperience />
              <Contact />
            </>
          }
        />
        <Route path="/projects" element={<Portfolio />} />
      </Routes>

      <Footer />
      <Dock />
    </div>
  );
}

export default App;
