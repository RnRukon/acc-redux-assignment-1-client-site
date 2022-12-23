import React from 'react';
import { Outlet } from 'react-router-dom';
import DeashBoardNav from './DeashBoardNav/DeashBoardNav';

const OutletPage = () => {
    console.log(Outlet);
    return (
        <div className="h-screen flex-1 p-7  dark:text-slate-300">
            <DeashBoardNav />
            <Outlet />
        </div>
    );
};

export default OutletPage;