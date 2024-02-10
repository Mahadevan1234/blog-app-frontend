import logo from './logo.svg';
import './App.css';
import Loginpage from './components/Loginpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registerpage from './components/Registerpage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpage/>}/>
        <Route path='/register' element={<Registerpage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
