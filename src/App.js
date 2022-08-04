import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';



function App() {
  return (
    <div>
     <Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}>Home</Route>
      <Route path='/packages'></Route>
      <Route path='/designs' element={<Home></Home>}></Route>
      <Route path='/about' element={<Home></Home>}></Route>
      <Route path='/bookings' element={<Home></Home>}></Route>
      <Route path='/signin' element={<Home></Home>}></Route>
    </Routes>
     </Navbar>
    </div>
  );
}

export default App;
