import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import History from './Components/History';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
