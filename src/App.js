import "./App.scss";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About";
import Workflow from "./components/Workflow";
import WorkExperience from "./components/WorkExperience";
// import Portfolio from "./components/Portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        {/* <About /> */}
        {/* <Workflow /> */}
        <WorkExperience />
        {/* <Portfolio /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
