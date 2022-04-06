import './App.css';
import { Cronologia } from './page/Cronologia';
import { HomePage } from './page/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Casas } from './page/Casas';

function App() {
  return (
    <div className="App">
      <Router>
      <HomePage/>
       <Routes>
            <Route path="/casas" element={<Casas />} />
            {/* <Route path="/characters/:id" element={<Personajes />} /> */}
            <Route path="/cronologia" element={<Cronologia />} />
   
    </Routes>
    </Router>
    </div>
  );
}

export default App;
