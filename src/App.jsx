
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Contact from "./Routes/Contact"
import { useCharStates } from './Components/utils/Context';


function App() {
  const { state } = useCharStates();

  const themeStyles = {
    backgroundColor: state.theme ? 'black' : 'white',
    color: state.theme ? 'white' : 'black',
  };

  return (
    <div className="App" >
      <Navbar />
      <div style={themeStyles}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/favs' element={<Favs />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
