import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  return (
    <div className="bg-[#FD9255] text-white lg:text-lg flex items-center justify-around gap-4 h-40">
      <div className="flex w-24">
        <img className="p-2 w-full" src="/images/casa.png" alt="casa" />
      </div>
      <nav className="lg:flex">
        <section id="hamburger-menu" className="lg:hidden min-h-full">
          <div className="">
            <GiHamburgerMenu className="text-5xl cursor-pointer"/>
          </div>
          {/* hidden menu */}
            <div className="hidden ">
                <ul className="flex flex-col gap-3">
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
