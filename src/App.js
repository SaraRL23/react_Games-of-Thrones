import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import { CharactersDetailPage } from './page/CharactersDetailPage';
import { CharactersPage } from './page/CharactersPage';

import { Cronologia } from './page/Cronologia';

import { HomePage } from './page/HomePage';
import { HousesDetailPage } from './page/HousesDetailPage';

import { HousesPage } from './page/HousesPage';

function App() {
  return (
    <div className="App">
    
     <Router>
       <Routes>
       <Route path='/' element={<HomePage />}/>
       <Route path='/characters' element={<CharactersPage />}/>
       <Route path="/characters/:name" element={<CharactersDetailPage />}/>
       <Route path="/houses" element={<HousesPage />} />
       <Route path="/houses/:name" element={<HousesDetailPage />} />
       <Route path="/cronologia" element={<Cronologia />} />
   
    </Routes>
    </Router>

    </div>
  );
}

export default App;
