// import { useState } from "react";
import "../index.css";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-5">
      <aside>
        <div className="unclickabled drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-4" className="drawer-button">
              Term and Policy
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <div className="menu bg-base-200 text-base-content h-full w-80 overflow-hidden md:w-150">
              <div className="w-full h-full flex flex-grow flex-row justify-center items-center overflow-hidden">
                {Array.from({ length: 5 }, (_, colIndex) =>
                  colIndex % 2 === 0 ? (
                    <div key={colIndex} className="flex flex-col">
                      {Array.from({ length: 7 }, (_, rowIndex) => (
                        <div
                          key={rowIndex}
                          className={`square bg-blur md:square-lg ${
                            (Math.floor(rowIndex / 7) + rowIndex) % 2 === 0
                              ? "bg-base-100 square-animation"
                              : "bg-base-200"
                          }`}
                        ></div>
                      ))}
                    </div>
                  ) : (
                    <div key={colIndex} className="flex flex-col">
                      {Array.from({ length: 7 }, (_, rowIndex) => (
                        <div
                          key={rowIndex}
                          className={`square bg-blur md:square-lg  ${
                            (Math.floor(rowIndex / 7) + rowIndex) % 2 === 0
                              ? "bg-base-200"
                              : "bg-base-100 square-animation"
                          }`}
                        ></div>
                      ))}
                    </div>
                  )
                )}

                <div className="px-4 chat chat-start absolute z-2">
                  <div className="chat-bubble text-left bg-base-100">
                    <ul className="list">
                      <li className="list-row">
                        <div className="text-xl font-thin opacity-40 tabular-nums">
                          1
                        </div>
                        <p className="text-l font-semibold">
                          there is no members were harmed in the develop, ✌️.
                        </p>
                      </li>
                      <li className="list-row">
                        <div className="text-xl font-thin opacity-40 tabular-nums">
                          2
                        </div>
                        <p className="text-l font-semibold">
                          all photo originally from the member's sns.
                        </p>
                      </li>
                      <li className="list-row">
                        <div className="text-xl font-thin opacity-40 tabular-nums">
                          3
                        </div>
                        <p className="text-l font-semibold">
                          develop with react ts && daisyUI.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>
          Copyright © {new Date().getFullYear()} -{" "}
          <a href="https://github.com/khaicalalf" className="link link-hover">
            React
          </a>{" "}
          with 💓
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
