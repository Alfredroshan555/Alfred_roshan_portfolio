import logo from './logo.svg';
import './App.scss';
import Intro from './components/Intro/intro';
import Skills from './components/skills';
import Portfolio from './components/Portfolio';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
   <div>
    <Intro />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
   </div>
  );
}

export default App;
