import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="h-screen hero flex flex-col justify-center items-center">
      <div className="w-52 h-52 mb-5 border-black border-2 rounded-full overflow-hidden">
        <img src="/images/smari.jpeg" />
      </div>
      <h1 className="font-bold text-4xl">Smári</h1>
      <p>A dveloper, i have some pojects</p>
      <ul className="flex gap-3 pt-5">
        <li><button><a href="https://github.com/smaristeinar"><img width="32px" height="auto" src="/images/github.svg" alt="" /></a></button></li>
        <li><button><a href="https://www.linkedin.com/in/sm%C3%A1ri-steinar-982132201/"><img width="32px" height="auto" src="/images/linkedin.svg" alt="" /></a></button></li>
        <li><button><a href="mailto: smarikul@hotmail.com"><img width="32px" height="auto" src="/images/mail.svg" alt="" /></a></button></li>
      </ul>
      <div className="pt-10 justify-self-end ">
      <Link to="/portfolio">
        <Button content="Check it out"/>
      </Link>
      </div>
    </section>
  );
}
