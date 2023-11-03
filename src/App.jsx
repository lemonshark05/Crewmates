import { useState } from 'react';
import Sidebar from './components/Sidebar';
import CardList from './components/CardList';
import CreateCrewmate from './components/CreateCrewmate';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const HomePage = () => (
  <div className="home-page">
    <h1> Welcome to the Crewmate Creator!</h1>
    <h3> Here is where you can create your very own set of crewmates before sending them off into space! </h3>
    <img src="/src/assets/crewmates.43d07b24.png" className="welcome-images" alt="Crewmates"/>
    <br/>
    <img src="/src/assets/spaceship.3d8f767c.png" className="welcome-images" alt="Spaceship"/>
  </div>
);

function App() {
  const [themes] = useState([
    { name: 'Home', url: '/' }, // Changed from /home to / for root path
    { name: 'Create a Crewmate!', url: '/create' },
    { name: 'Crewmate Gallery', url: '/gallery' }
  ]);
  const [selectedSamples, setSelectedSamples] = useState([]);

  // You can add your theme selection logic here, if necessary

  return (
    <Router>
      <div className="App">
        <Sidebar themes={themes} />
        <div className="App-page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateCrewmate />} />
            <Route path="/gallery" element={<CardList samples={selectedSamples} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
