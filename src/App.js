import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { CharactersDetailPage } from './page/CharactersDetailPage';
import { CharactersPage } from './page/CharactersPage';
import { HomePage } from './page/HomePage';

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
        
       <Route path='/characters' element={<CharactersPage />}/>
       <Route path="/characters/:_id" element={<CharactersDetailPage />}/>
       </Routes>
       </Router>
    </div>
  );
}

export default App;
