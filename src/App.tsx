/**
 * Starting the app with: npm run dev
 *    Ctrl + C in terminal to stop local build.
 * Deploy the app with : npm run deploy
 */

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Rejsekort from "./Pages/rejsekort";
import Projects from "./Pages/projects";
import FitnessHome from "./Pages/FitnessTracker/fitnessHome";

function App() {
  /**
   * useState is done to set the state of an element. It creates an array of two elements.
   * The initial state and a changing state. The initial state is set in the '()'.
   */

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rejsekort" element={<Rejsekort />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/FitnessTracker" element={<FitnessHome />} />
      </Routes>
    </Router>
  );
}

export default App;
