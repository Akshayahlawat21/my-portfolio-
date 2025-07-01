import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default App;
