import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import menuData from "./menudata";
import { BsSearch } from "react-icons/bs";

import img2 from "../../../assets/Images/logo.png";
import "../../../styles/Navbar.css";

const Header = () => {
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const [sticky, setSticky] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const searchRef = useRef(null);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= headerHeight) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const handleSearchExpand = () => {
    setSearchExpanded(!searchExpanded);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchExpanded(false);
    }
  };

  useEffect(() => {
    const headerElement = document.getElementById("header");
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight);
    }

    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  useEffect(() => {
    setNavbarOpen(false);
  }, [location]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header
        id="header"
        className={`header top-0 left-0 z-40 flex w-full h-20 items-center  ${
          sticky
            ? "fixed !z-[9999] !bg-white  shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
            : "relative bg-white"
        }`}
      >
        <div className="container">
          <div className="relative -mx-7 flex items-center justify-between   ">
            <div className="w-100 max-w-full px-4  xl:mr-16 ">
              <Link
                to="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <img
                  className="w-20 h-10 ml-20 object-contain"
                  src={img2}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4 text-black  ">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px]  text-black transition-all duration-300  ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px]  transition-all duration-300 ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px]  transition-all duration-300 dark: ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50  py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!y lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12 my-3 text-black">
                    {menuData.map((menuItem, index) => (
                      <li key={menuItem.id} className="group relative">
                        {menuItem.path ? (
                          <Link
                            to={menuItem.path}
                            className={`flex py-2 text-base text-black group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center  justify-between py-2 text-base text-black group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 font-mulish"
                            >
                              {menuItem.title}
                            </p>
                            <div
                              className={`submenu relative top-full left-0 rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem) => (
                                <Link
                                  to={submenuItem.path}
                                  key={submenuItem.id}
                                  className="block rounded py-2.5  text-xs text-dark hover:opacity-70 dark:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center lg:pr-0">
                {searchExpanded ? (
                  <div
                    ref={searchRef}
                    className="relative flex items-center"
                  >
                    <input
                      type="text"
                      placeholder="Search"
                      className="px-4 py-2 text-sm text-black bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                      onClick={handleSearchExpand}
                      className="absolute right-0 flex items-center justify-center w-10 h-10 text-black bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <BsSearch />
                    </button>
                  </div>
                ) : (
                  <div
                    ref={searchRef}
                    className="mr-4 border-r border-black pr-4 h-[40px] mr-[-24px] items-center flex justify-center cursor-pointer"
                    onClick={handleSearchExpand}
                  >
                    <BsSearch className="text-black" size={24} />
                  </div>
                )}
                <Link
                  to="/contact"
                  className="@apply ml-10 flex flex-row items-start  w-auto h-auto flex-none order-2 grow-0 px-[30px] py-[15px] rounded-[10px] bg-[#1B5E88] text-white font-semibold hover:bg-sky-600"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        style={{ height: sticky ? `${headerHeight}px` : 0 }}
        className="w-full"
      ></div>
    </>
  );
};

export default Header;
