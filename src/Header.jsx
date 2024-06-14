import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import { Button } from "rsuite";

const Header = () => {
  const [style, setstyle] = useState({});
  //--------------Shadow and Background CHange on scroll-----------------//

  const changeStyleOnScroll = () => {
    if (window.scrollY > 15) {
      setstyle({
        background: "#f9f5e7",
        color: "black",
        boxShadow: " 0 10px 15px -3px rgb(0 0 0 / 0.1)",
      });
    } else {
      setstyle({
        background: "none",
        color: "white",
        boxShadow: " none",
      });
    }
  };

  window.addEventListener("scroll", changeStyleOnScroll);
  return (
    <div className="w-full flex items-center justify-between font-semibold fixed top-0 left-0 p-2 z-50 text-white bg-[rgba(0,0,0,0.2)]">
      <div className="w-44">
        <img
          src="./logo.png"
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <ul className="flex items-center text-lg gap-5 ">
        <li className="hover:border-2 hover:shadow-sm hover:rounded-lg p-2 hover:underline  cursor-pointer">
          Home
        </li>
        <li className="hover:border-2 hover:shadow-sm hover:rounded-lg p-2 hover:underline cursor-pointer ">
          Nos Service
        </li>
        <li className="hover:border-2 hover:shadow-sm  hover:rounded-lg p-2 hover:underline cursor-pointer">
          About US
        </li>
      </ul>

      <div className="flex items-center gap-3">
        <span
          className=" hover:underline  cursor-pointer text-base"
          style={{ padding: 10 }}
        >
          Login
        </span>
        <span
          className=" hover:underline  cursor-pointer text-base"
          style={{ padding: 10 }}
        >
          Signin
        </span>
      </div>
    </div>
  );
};

export default Header;
