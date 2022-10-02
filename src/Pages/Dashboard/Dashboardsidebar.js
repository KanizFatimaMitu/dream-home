import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboardsidebar = ({children}) => {
    return (
        <div>
            <div class="drawer drawer-mobile bg-accent">
                
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    {/* <!-- Page content here --> */}

                        {children}
                        <Outlet></Outlet>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 font-bold text-primary ">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard/booking'>Bookings detail</Link></li>
                        <li><Link to='/dashboard/consultation'>Consultation Detail</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboardsidebar;