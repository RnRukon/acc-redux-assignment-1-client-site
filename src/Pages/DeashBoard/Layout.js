import React from 'react';
import OutletPage from './Outlet';
import SideBar from './SideBar';

const Layout = () => {
    return (
        <div className="flex  dark:bg-slate-800">
            <SideBar />
            <OutletPage />
        </div>
    );
};

export default Layout;