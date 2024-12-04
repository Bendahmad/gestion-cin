import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AfficherCIN from "./components/AfficherCIN";
import AjouterCIN from "./components/AjouterCIN";
import ModifierCIN from "./components/ModifierCIN";
import VueCIN from "./components/VueCIN";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AfficherCIN />} />
          <Route path="/ajouter-cin" element={<AjouterCIN />} />
          <Route path="/modifier-cin/:id" element={<ModifierCIN />} />
          <Route path="/vue-cin/:id" element={<VueCIN />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
