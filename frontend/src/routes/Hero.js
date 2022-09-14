import React from "react";
import Button from "../components/Button";
export default function Hero() {
  return (
    <section className="h-screen hero flex flex-col justify-center items-center">
      <div className="w-52 h-52 mb-5 border-black border-2 rounded-full overflow-hidden">
        <img src="/images/smari.jpeg" alt="" srcset="" />
      </div>
      <h1 className="font-bold text-4xl">Smári</h1>
      <p>A dveloper, i have some pojects</p>
      <div className="pt-20 justify-self-end ">
        <Button content="Check it out" />
      </div>
    </section>
  );
}
