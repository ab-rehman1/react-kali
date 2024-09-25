import './css/index.css';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
           <Route path='/' exact element={<Home />} />
           <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </>  
  );
}

export default App;
