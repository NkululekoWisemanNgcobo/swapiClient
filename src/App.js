
import './App.css';
import Header from './components/Header'
import Cards from './components/Cards';
import CharacterDetails from './components/CharacterDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/person/:name" element={<CharacterDetails />} />
          <Route path="/people/:page" element={<Cards />} />
          <Route path="/" element={<Cards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
