import React, { useState } from 'react';
import Control from "./assets/control.png"
import Logo from "../../Image/redux.svg"
import Chart_fill from "./assets/Chart_fill.png"
import Chat from "./assets/Chat.png"
import Calendar from "./assets/Calendar.png"
import Search from "./assets/Search.png"
import Chart from "./assets/Chart.png"
import Folder from "./assets/Folder.png"
import Setting from "./assets/Setting.png"
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", src: Chart_fill, path: '/dashboard/products' },
    { title: "Add Product", src: Chat, path: '/dashboard/add-product-form' },
    { title: "Schedule ", src: Calendar },
    { title: "Search", src: Search },
    { title: "Analytics", src: Chart },
    { title: "Files ", src: Folder, gap: true },
    { title: "Setting", src: Setting },
    { title: "About", src: Setting, path: '/dashboard/about' },
    { title: "Go to Home", src: Setting, path: "/" },

  ];

  const menuStyle = { textDecoration: "none" }
  return (
    <div
      className={` ${open ? "w-72" : "w-32 "
        } xs:w-0  h-screen px-2 pt-8 relative duration-300 bg-gray-200  dark:bg-slate-700`}
    >
      <img
        src={Control}
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)} alt=''
      />
      <div className="flex gap-x-4 items-center px-4">
        <img
          src={Logo}
          className={`cursor-pointer w-10 duration-500 ${open && "rotate-[360deg]"
            }`} alt=''
        />
        <h1
          className={`dark:text-white text-sky-500 origin-left font-medium text-xl duration-200 ${!open && "scale-0"
            }`}
        >
          Rukon.JS
        </h1>
      </div>
      <ul className="pt-6 pl-0 ">
        {Menus.map((Menu, index) => (
          <NavLink to={Menu.path} style={menuStyle}>
            <li
              key={index}
              className={` hover:bg-sky-100 dark:hover:bg-slate-600 py-2 rounded-md  cursor-pointer hover:bg-light-white text-md items-center 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                } `}
            >

              <div className="flex gap-x-4 px-4">
                <img src={Menu.src} alt='' className={`${!open ? 'w-8' : "w-6"}`} />


                <span className={`${!open && "hidden"} dark:text-slate-200  origin-left duration-200`}>
                  {Menu.title}
                </span>

              </div>

            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;