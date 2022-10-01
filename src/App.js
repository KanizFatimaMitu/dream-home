import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Packages from './Pages/Packages/Packages';
import Bookings from './Pages/Bookings';
import SignIn from './Pages/SignIn/SignIn';
import Home from './Pages/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AdminRoute from './Authentications/AdminRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import SignUp from './Pages/SignIn/SignUp';
import ConfirmationModal from './Pages/Packages/ConfirmationModal';
import Consult from './Consult/Consult';
import BookingDetail from './Pages/Dashboard/BookingDetail';
import ConsultationDetail from './Pages/Dashboard/ConsultationDetail';

// For Animation 
function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (

    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/packages" element={<Packages></Packages>}></Route>
          <Route path="/consult" element={<Consult></Consult>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/bookings" element={<Bookings></Bookings>}></Route>
          <Route path="/dashboard" element={
            <AdminRoute>
              <Dashboard></Dashboard>
            </AdminRoute>
          }>
            <Route path='/dashboard/booking' element={<BookingDetail></BookingDetail>}></Route>
            <Route path='/dashboard/consultation' element={<ConsultationDetail></ConsultationDetail>}></Route>
          </Route>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/confirm" element={<ConfirmationModal></ConfirmationModal>}></Route>
        </Routes>
      </Navbar>


    </div>
  );
}

export default App;
