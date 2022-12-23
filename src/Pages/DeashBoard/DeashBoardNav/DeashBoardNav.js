import React from 'react';
import { FaSearch } from "react-icons/fa";
import DarkAndLightMode from '../../Components/DarkAndLightMode.js/DarkAndLightMode';


const DeashBoardNav = () => {
    return (
        <nav className='h-14 bg-slate-300    dark:bg-slate-600 rounded-full m-2 max-w-7xl mx-auto px-5'>
            <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900'>

                <li className='flex  bg-white dark:bg-slate-300 mx-auto h-8 w-full max-w-lg  rounded-full pr-0'>
                    <input
                        className='h-8 px-3 bg-white  rounded-l-full w-full text-sm border-0 focus:ring-5 outline-none'
                        type='text'
                        name='search'
                        placeholder='Search'
                        id='search'
                    />
                    <li className=' flex   bg-violet-600 w-5 px-5 rounded-full'>
                        <button >
                            <FaSearch className=' text-white' />
                        </button>
                    </li>
                </li> <li className=' dark:text-white'>
                    <DarkAndLightMode />
                </li>
            </ul>

        </nav>
    );
};

export default DeashBoardNav;