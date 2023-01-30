import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState,useEffect } from "react";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event) => {
    const menu = document.getElementById("hamburger-menu");
    if (menu && !menu.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  

  return (
    <div className="bg-[#FD9255] text-white lg:text-lg flex items-center justify-around p-10 gap-4 h-40">
      <div className="flex w-24">
        <img className="p-2 w-full" src="/images/casa.png" alt="casa" />
      </div>
      <nav className="lg:flex">
        <section id="hamburger-menu" className="lg:hidden min-h-full">
          <div className="">
            <GiHamburgerMenu onClick={toggleMenu} className="text-5xl relative cursor-pointer"/>
          </div>
          <div className={`flex flex-col gap-3 absolute top-40 left-0 p-3 bg-[#FD9255] min-w-full text-center   ${showMenu ? "block" : "hidden"}`}>
                <ul className="flex flex-col gap-10">
                    <li>
                        How we Work
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        Free Quote
                    </li>
                    <li>
                        Contact Us
                    </li>
                </ul>
            </div>
        </section>
        <section id="desktop-menu" className="hidden lg:flex">
          <ul className="flex md:gap-10 gap-3">
            <li>
              <span href="" target="_blank" rel="noreferrer">
                How we Work
              </span>
            </li>
            <li>
              <span href="" target="_blank" rel="noreferrer">
                Services
              </span>
            </li>
            <li>
              <span href="" target="_blank" rel="noreferrer">
                Free Quote
              </span>
            </li>
            <li>
              <span href="https://reactjs.org" target="_blank" rel="noreferrer">
                Contact Us
              </span>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  );
};

export default Nav;
