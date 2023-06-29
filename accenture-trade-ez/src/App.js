import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'; // Import the HomePage component
import './App.css';
import FindTradie from './pages/FindTradie';
import Register from './pages/Register';
import MarketPlace from './pages/MarketPlace';
import Navbar from './components/Navbar'
import TradieRegisterationPage from './pages/TradieRegisteration';


function App() {
  return (
    <>
    <Navbar />
      <div className="App">
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/marketplace" element={<MarketPlace/>} />
            <Route path="/find-tradie" element={<FindTradie />} />
            <Route path="/register-tradie" element={<TradieRegisterationPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<></>} />
        </Routes>
      </div>
    </>
  );
}
export default App;
