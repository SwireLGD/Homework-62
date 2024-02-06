import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from './Containers/Home/Home';
import AboutMe from "./Containers/AboutMe/AboutMe";
import Contacts from "./Containers/Contacts/Contacts";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};

export default App;