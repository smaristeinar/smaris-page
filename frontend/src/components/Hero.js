import React from "react";
export default function Hero() {
  return (
    <section className="hero">
      <div className="title">
        <div className="title-smari">
          <h1>
            SMARI..<span className="blinker"></span>
          </h1>
          <div>
            <p>A developer</p>
            <span>
              <svg
                width="96"
                height="76"
                viewBox="0 0 96 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3L48 73L93 3"
                  stroke="black"
                  stroke-width="8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
