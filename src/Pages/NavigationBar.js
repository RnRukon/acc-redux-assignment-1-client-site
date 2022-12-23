import React from 'react'
import Logo from "../Image/redux.svg"
import { NavLink } from 'react-router-dom';
import DarkAndLightMode from './Components/DarkAndLightMode.js/DarkAndLightMode';
function NavigationBar() {



	return (

		<nav className=" bg-slate-300 border-slate-200 px-2 sm:px-4 py-0 rounded dark:bg-slate-700">
			<div className="container flex flex-wrap items-center justify-between mx-auto">
				<li  className="flex items-center">
					<img src={Logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
					<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">RUKON.JS</span>
				</li>
				<div className="flex items-center md:order-2">

					<DarkAndLightMode />
					
					{/* <!-- Dropdown menu --> */}

					<button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600" aria-controls="mobile-menu-2" aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
					</button>
				</div>
				<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
					<ul className="flex flex-col  mt-4   md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-slate-700 md:dark:slate-slate-900 dark:border-slate-700">
												
						<li >
							<NavLink to='/' ><span className="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-slate-700 md:p-0 dark:text-slate-400 md:dark:hover:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700">Home</span></NavLink>
						</li>
						<li >
							<NavLink to='/' ><span className="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-slate-700 md:p-0 dark:text-slate-400 md:dark:hover:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700">About</span></NavLink>
						</li>
						<li >
							<NavLink to='/' ><span className="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-slate-700 md:p-0 dark:text-slate-400 md:dark:hover:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700">Services</span></NavLink>
						</li>
						<li >
							<NavLink to='/' ><span className="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-slate-700 md:p-0 dark:text-slate-400 md:dark:hover:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700">Pricing</span></NavLink>
						</li>
						<li >
							<NavLink to='/' ><span className="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-slate-700 md:p-0 dark:text-slate-400 md:dark:hover:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700">Contact</span></NavLink>
						</li>
						<li >
							<NavLink to='/dashboard' ><span className="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-slate-700 md:p-0 dark:text-slate-400 md:dark:hover:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700">Dashboard</span></NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>

	)
}

export default NavigationBar





/* <Navbar style={{ position: 'fixed', zIndex: 100, left: 0, right: 0, top: 0 }}>
			<Navbar.Brand >
				<NavLink to="/" style={navLinkStyle}>

					<img style={{ height: "100%" }} src={Logo} alt="" /> Redux

				</NavLink>
			</Navbar.Brand>
			<Nav>
				<Nav.Item icon={<HomeIcon />}>
					<NavLink to="/" style={navLinkStyle}>

						home

					</NavLink>
				</Nav.Item>

				<Nav.Item >
					<NavLink to="/all-Products" style={navLinkStyle}>
						Products
					</NavLink></Nav.Item>
				<Nav.Menu title="About">
					<Nav.Item>Company</Nav.Item>
					<Nav.Item>Team</Nav.Item>
					<Nav.Menu title="Contact">
						<Nav.Item>Via email</Nav.Item>
						<Nav.Item>Via telephone</Nav.Item>
					</Nav.Menu>
				</Nav.Menu>
			</Nav>
			<Nav pullRight>
				<Nav.Item icon={<CogIcon />}>

					<NavLink to='/dashboard' style={navLinkStyle}>
						Dashboard
					</NavLink>

				</Nav.Item>
				<Nav.Item >

					<DarkAndLightMode />

				</Nav.Item>

			</Nav>
		</Navbar> */
