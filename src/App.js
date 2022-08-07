import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Packages from './Pages/Packages';
import Designs from './Pages/Designs';
import Bookings from './Pages/Bookings';
import SignIn from './Pages/SignIn/SignIn';
import Home from './Pages/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import PrivateRoute from './Authentications/PrivateRoute';


// const publicRoute =[
//   {path:"/", name:"Home", Components: Home}
//   {path:"/packages", name:"Packages", Components: Packages}
//   {path:"/designs", name:"Designs", Components: Designs}
//   {path:"/about", name:"About", Components: About}
//   {path:"/bookings", name:"Home", Components: Home}
// ]


function App() {
  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div>
       <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/packages" element={<Packages></Packages>}></Route>
          <Route path="/designs" element={
            <PrivateRoute>
              <Designs></Designs>
            </PrivateRoute>
          }></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/bookings" element={<Bookings></Bookings>}></Route>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
        </Routes>
      </Navbar> 
      
    </div>
  );
}

export default App;
