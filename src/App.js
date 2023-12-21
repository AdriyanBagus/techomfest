import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './pages/Home';
import BankSampah from './pages/BankSampah';
import Artikel from './pages/Artikel';
import Login from './pages/Login';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/artikel' element={<Artikel/>}/>
        <Route path='/banksampah' element={<BankSampah/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
