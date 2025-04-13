// import { useState } from "react";
import "../index.css";
import WhatIs from "./WhatIs";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-5">
      <aside>
        <WhatIs />
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
