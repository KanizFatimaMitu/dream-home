import React from 'react';

const Dashboardsidebar = ({children}) => {
    return (
        <div>
            <div class="drawer drawer-mobile bg-accent">
                
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center ">
                    {/* <!-- Page content here --> */}

                        {children}

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 font-bold text-primary ">
                        {/* <!-- Sidebar content here --> */}
                        <li><a>Bookings detail</a></li>
                        <li><a>Consultation Detail</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboardsidebar;