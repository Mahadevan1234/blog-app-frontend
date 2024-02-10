import logo from './logo.svg';
import './App.css';
import Loginpage from './components/Loginpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
