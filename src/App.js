import logo from './logo.svg';
import './App.css';
import Loginpage from './components/Loginpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registerpage from './components/Registerpage';
import Addpost from './components/Addpost';
import Viewpost from './components/Viewpost';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpage/>}/>
        <Route path='/register' element={<Registerpage/>}/>
        <Route path='/add' element={<Addpost/>}/>
        <Route path='/viewall' element={<Viewpost/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
