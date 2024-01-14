import React from 'react'
import { Button, Navbar } from 'flowbite-react';
import { Link, useLocation } from "react-router-dom";
import Icon from '../icon.svg';
import KofiButton from './KofiButton';
import { useSidebarContext } from "../context/SidebarContext";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";

function NavigationMenu() {
    const { isOpenOnSmallScreens, isPageWithSidebar, setOpenOnSmallScreens } = useSidebarContext();
    let location = useLocation();

    return (
        <Navbar className="bg-transparent">
             {isPageWithSidebar && (
          <button
            aria-controls="sidebar"
            aria-expanded="true"
            className="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden"
            onClick={() => setOpenOnSmallScreens(!isOpenOnSmallScreens)}
          >
            {isOpenOnSmallScreens ? (
              <MdOutlineClose className="h-6 w-6 shrink-0"  />
            ) : (
              <RiMenu2Fill className="h-6 w-6 shrink-0" />
            )}
          </button>
        )}
            <Navbar.Brand>
                {/* PLACEHOLDER IMAGE */}
                <Link to="/">
                    <img src={Icon} height={128} width={98} alt="TXTPODS logo" />
                </Link>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <KofiButton />
            </div>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link active={location.pathname == "/"}>
                    <Link to="/">Home</Link>
                </Navbar.Link>
                <Navbar.Link active={location.pathname == "/podcasts"}>
                    <Link to="/podcasts">Podcasts</Link>
                </Navbar.Link>
                <Navbar.Link active={location.pathname == "/about"}>
                    <Link to="/about">About</Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationMenu