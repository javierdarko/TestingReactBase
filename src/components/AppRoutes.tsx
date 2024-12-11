import { Routes, Route, Navigate } from "react-router-dom";
import { HomeIndex } from "./MainComponent";
import { PokemonDetails } from "./MainComponent/PokemonDetails";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/HomeIndex" replace />} />
    <Route path="/HomeIndex" element={<HomeIndex />} />
    <Route path="/PokemonDetails" element={<PokemonDetails />} />
  </Routes>
);

export default AppRoutes;
