import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import { CharactersDetailPage } from './page/CharactersDetailPage';
import { CharactersPage } from './page/CharactersPage';

import { Chronology } from './page/Chronology';

import { HomePage } from './page/HomePage'; 
import { HousesDetailPage } from './page/HousesDetailPage';

import { HousesPage } from './page/HousesPage';


// import { ReactComponent as WorkIcon } from "./work.svg";
// import { ReactComponent as SchoolIcon } from "./school.svg";

// import timelineElements from "./components/timeLineElements";

// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component"

// import "react-vertical-timeline-component/style.min.css";

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
       <Route path="/chronology" element={<Chronology />} />

      
   
    </Routes>
    </Router>

    </div>
  );
}

export default App;
