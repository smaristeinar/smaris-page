import React from "react";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className="p-0 m-0 absolute top-2 left-2 z-20">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color={"white"}
          direction="right"
          hideOutline
          rounded
        />
      </div>
      <div
        className={`h-screen p-10 z-100 absolute top-0 left-0 bg-black flex flex-col transition delay-5 ease-in-out  ${
          isOpen ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="">
          <ul className={` text-white pl-6 pt-3 pr-6 text-xl`}>
            <Link to="/">
              <li className="hover:text-indigo-500">Home</li>
            </Link>
            <Link to="/Portfolio">
              <li className="hover:text-indigo-500">Portfolio</li>
            </Link>
            <Link to="/about">
              <li className="hover:text-indigo-500">About</li>
            </Link>
            <Link to="/Contact">
              <li className="hover:text-indigo-500">Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}
