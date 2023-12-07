import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/screens/home/Home'
import { Dynamic } from "./components/screens/dynamic/Dynamic";
import { Pipeline } from "./components/screens/pipeline/Pipeline";
import { Environment } from "./components/screens/environment/Environment";
import { Civil } from "./components/screens/civil/Civil";
import { Oilfield } from "./components/screens/oilfield/Oilfield";

export function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dynamic" element={<Dynamic />} />
                <Route path="/pipeline" element={<Pipeline />} />
                <Route path="/environment" element={<Environment />} />
                <Route path="/civil" element={<Civil />} />
                <Route path="/oilfield" element={<Oilfield />} />
            </Routes>
        </Router>
    )
}