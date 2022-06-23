import './App.css';

//Import Components
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';
import Work from './Components/work/Work';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';

import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllWorks } from './Components/redux/reducers/works/works.action'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {

    function getData() {
      dispatch(getAllWorks());
    }
    getData();
  }, [])

  return (
    <>
      <Header />
      <Home />
      <About />
      <Service />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
