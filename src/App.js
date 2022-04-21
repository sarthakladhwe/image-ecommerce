import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header'
import Photos from './Pages/Photos'
import Cart from './Pages/Cart'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
