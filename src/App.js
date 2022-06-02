import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';
import Work from './Components/work/Work';
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
      {/* <Work /> */}
    </>
  );
}

export default App;
