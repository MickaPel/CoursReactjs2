import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Presentation from "../src/Pages/Presentation"
import Routage from "../src/Pages/Routage"
import Navigation from './Components/Navigation';
import Logo from "./Components/Logo";
import Static from "./Pages/Static";
import State from "./Pages/State";
import Props from "./Pages/Props";
import Connexion from "./Pages/Connexion";
import { BtnBack } from "./Components/Buttons";
import Effects from "./Pages/Effects";
import Request from "./Pages/Request";
import Forms from "./Pages/Forms";
import UseParams from "./Pages/UseParams";
import NotFound from "./Pages/NotFound";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logo />
        <Navigation />
        <div className="main">
          <Routes>
            <Route path="/" element={<Presentation />} />
            <Route path="/routing" element={<Routage />} />
            <Route path="/static" element={<Static />} />
            <Route path="/hooks" element={<State />} />
            <Route path="/props" element={<Props />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/effect" element={<Effects />} />
            <Route path="/request" element={<Request />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/user/:id" element={<UseParams />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <BtnBack />
      </BrowserRouter>
    </div>
  );
}

export default App;
