import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Packages from './Pages/Packages';
import Designs from './Pages/Designs';
import Bookings from './Pages/Bookings';
import SignIn from './Pages/SignIn';
import Home from './Pages/Home';



function App() {
  return (
    <div>
     <Navbar>
    <Routes>
      <Route pathname='/' element={<Home></Home>}></Route>
      <Route pathname='/packages' element={<Packages></Packages>}></Route>
      <Route pathname='/designs' element={<Designs></Designs>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/bookings' element={<Bookings></Bookings>}></Route>
      <Route path='/signin' element={<SignIn></SignIn>}></Route>
    </Routes>
     </Navbar>
    </div>
  );
}

export default App;
