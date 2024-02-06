import Header from "./Components/Header/Header";
import { Routes, Route } from 'react-router-dom';
import Home from './Containers/Home/Home';
import AboutMe from "./Containers/AboutMe/AboutMe";
import Contacts from "./Containers/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import './App.css';

const App = () => {
  return (
    <div className="AppBox">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>   
  );
};

export default App;