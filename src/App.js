import "./App.scss";
import Intro from "./components/Intro/intro";
import About from "./components/About";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import FluidBackground from "./components/shared/Background/FluidBackground";
import Cursor from "./components/shared/Cursor";
import Dock from "./components/Dock";

import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="App">
      <Cursor />
      <FluidBackground />

      <Intro />
      <About />
      <Skills />
      <WorkExperience />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
      <Dock />
    </div>
  );
}

export default App;
