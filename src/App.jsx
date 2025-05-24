import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ByteBuddy from "./ByteBuddy";
import Jagame from './Jagame';
import PokePop from './PokePop';
import HeavenAndHell from './HeavenAndHell';

function App() {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/byte-buddy" element={<ByteBuddy />} /> 
          <Route path="/jagame" element={<Jagame />} /> 
          <Route path="/poke-pop" element={<PokePop />} /> 
          <Route path="/heaven-and-hell" element={<HeavenAndHell />} /> 
        </Routes>
    )
}

export default App
