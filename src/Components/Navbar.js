import React from 'react';

const Navbar = () => {
  return (
    <div class="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">

        <div class="w-full navbar bg-base-300">
          <div class="flex-1 px-2 mx-2 text-2xl">Dream House</div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>


          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal">

              <li><a>Home</a></li>
              <li><a>Packages</a></li>
              <li><a>Desings</a></li>
              <li><a>About</a></li>
              <li><a>Bookings</a></li>
              <li><a>Singin</a></li>
            </ul>
          </div>
        </div>

        Content
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 rounded-box">

          <li><a>Home</a></li>
          <li class="hover-bordered"><a>Packages</a></li>
          <li><a>Desings</a></li>
          <li><a>About</a></li>
          <li><a>Bookings</a></li>
          <li><a>Singin</a></li>

        </ul>

      </div>
    </div>
  );
};

export default Navbar;