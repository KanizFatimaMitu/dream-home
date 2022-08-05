import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
  return (
    <div class="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">

        <div class="w-full navbar px-20">
          <div class="flex-1 px-2 mx-2 text-2xl text-primary font-bold">Dream House</div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>


          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal gap-x-2">

              <li><NavLink to="/" className="rounded-lg">Home</NavLink></li>
              <li><NavLink to="/packages" className="rounded-lg">Packages</NavLink></li>
              <li><NavLink to="/designs" className="rounded-lg">Designs</NavLink></li>
              <li><NavLink to="/about" className="rounded-lg">About</NavLink></li>
              <li><NavLink to="/bookings" className="rounded-lg">Bookings</NavLink></li>
              <li><button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">Theme</button></li>
              <li class="dropdown dropdown-hover dropdown-end">

                <NavLink to="/singin" tabindex="0" class="btn btn-primary btn-outline rounded-full m-1">User</NavLink>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Your profile</a></li>
                  <li><a>your bookings</a></li>
                  <li><a>Settings</a></li>
                  <li><a>Sign out</a></li>
                </ul>

              </li>
            </ul>
          </div>
        </div>

        {children}

      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 rounded-box gap-y-2">

          <li><NavLink to="/" className="rounded-lg">Home</NavLink></li>
          <li><NavLink to="/packages" className="rounded-lg">Packages</NavLink></li>
          <li><NavLink to="/designs" className="rounded-lg">Designs</NavLink></li>
          <li><NavLink to="/about" className="rounded-lg">About</NavLink></li>
          <li><NavLink to="/bookings" className="rounded-lg">Bookings</NavLink></li>
          <li><NavLink to="/signin" className="rounded-lg">SignIn</NavLink></li>
          <li class="dropdown">


            <label tabindex="0" class="btn m-1">Click</label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-24">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>


          </li>

        </ul>

      </div>
    </div>
  );
};

export default Navbar;