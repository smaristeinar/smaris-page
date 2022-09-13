import React from "react";
import { useState } from "react";
import Hamburger from "hamburger-react";

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
        className={`h-screen p-10 absolute top-0 left-0 bg-black flex flex-col transition delay-5 ease-in-out  ${
          isOpen ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="">
          <ul className={` text-white pl-6 pt-3 pr-6 text-xl`}>
            <li>Home</li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
