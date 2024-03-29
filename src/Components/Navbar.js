import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import UseAdmin from '../Hooks/UseAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = ({ children }) => {
  const [dark, setDark] = useState(false)
  const [user, loading] = useAuthState(auth);



  const admin = UseAdmin();
  const { pathname } = useLocation();

  const logOut = () => {
    signOut(auth)
  }

  return (
    <div class="drawer drawer-end fixed top-0" data-theme={dark ? "dark" : "light"} >
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col ">

        <div class="w-full navbar px-20">
          <div class="flex-1 px-2 mx-2 text-2xl text-primary font-bold">
            {pathname.includes("dashboard") && (
              <label tabindex="0" for="my-drawer-2" class="btn btn-ghost btn-circle lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
            )

            }
            <NavLink to="/">Dream House</NavLink>
          </div>
          <div class="flex-none lg:hidden">


            <label for="my-drawer-3" class="btn btn-square btn-ghost">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>


          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal gap-x-2">
              <li><NavLink to="/" className="rounded-lg">Home</NavLink></li>
              <li><NavLink to="/packages" className="rounded-lg">Packages</NavLink></li>
              <li><NavLink to="/consult" className="rounded-lg">Consult</NavLink></li>
              <li><NavLink to="/about" className="rounded-lg">About</NavLink></li>
              <li><NavLink to="/dashboard" className="rounded-lg">Dashboard</NavLink></li>
              
              {/* for dark theme  */}
              <li>
                <label data-toggle-theme="dark,light" class="swap swap-rotate bg-inherit">
                  <input data-toggle-theme="dark,light" type="checkbox" onClick={() => setDark(!dark)} /><svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                  <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                </label>
              </li>
              {/* user icon option + hover  */}
              <li class="dropdown dropdown-hover dropdown-end">
                {/* <NavLink to="/singin" tabindex="0" class="btn btn-primary btn-outline rounded-full m-1">
                  User
                  </NavLink> */}
                <div className="bg-inherit rounded-lg">
                  <img class="w-10 h-10 rounded-full" src={user?.photoURL} alt='' />
                </div>


                <ul tabindex="0" class="dropdown-content menu p-2 gap-y-2 shadow bg-base-100 rounded-box w-52">
                  <li className='text-primary'> <a target="_blank" href="https://www.linkedin.com/in/kaniz-mitu/" >Your profile</a></li>
                  <li className='bg-primary rounded-lg text-white'>
                    {user ? <NavLink onClick={logOut} to='/signin'>SignOut</NavLink> : <NavLink to='/signin'>SignIn</NavLink>}
                  </li>

                </ul>
              </li>

            </ul>
          </div>
        </div>

        {children}

        {/* For hamburger menu  */}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 rounded-box gap-y-2">
          <li>
            <label data-toggle-theme="dark,light" class="swap swap-rotate bg-inherit">
              <input data-toggle-theme="dark,light" type="checkbox" onClick={() => setDark(!dark)} /><svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
              <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
            </label>
          </li>
          <li><NavLink to="/" className="rounded-lg">Home</NavLink></li>
          <li><NavLink to="/packages" className="rounded-lg">Packages</NavLink></li>
          <li><NavLink to="/consult" className="rounded-lg">Consult</NavLink></li>
          <li><NavLink to="/about" className="rounded-lg">About</NavLink></li>
          <li><NavLink to="/dashboard" className="rounded-lg">Dashboard</NavLink></li>
          <li>{user ? <NavLink onClick={logOut} className="rounded-lg" to='/signin'>SignOut</NavLink> : <NavLink className="rounded-lg text-neutral" to='/signin'>SignIn</NavLink>}</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;