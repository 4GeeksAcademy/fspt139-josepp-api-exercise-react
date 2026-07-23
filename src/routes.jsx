import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";

import { Characters } from "./pages/Characters";
import { Locations } from "./pages/Locations";
import { CharacterView } from "./pages/CharacterView";
import { EscenarioView } from "./pages/EscenacioView";


export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        <Route path= "/:page?" element={<Characters />} />
        <Route path= "/escenarios/:page?" element={<Locations />} />

        <Route path= "/personaje/:id" element={<CharacterView />} />
        <Route path= "/escenario/:id" element={<EscenarioView />} />
        
      </Route>
    )
);