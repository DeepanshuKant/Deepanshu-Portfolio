import './App.css';

//Import Components
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import Work from './Components/work/Work';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
