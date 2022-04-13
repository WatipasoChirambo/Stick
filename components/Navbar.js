import React, { useState } from "react";
import { MdMenu } from "react-icons/md";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="fixed top-0 w-full text-white">
      <div className="md:flex justify-between px-10 py-4 bg-black">
        <div className="md:flex justify-between gap-4">
          <div className="md:flex gap-2">
            <div className="flex gap-2 w-full">
              <div className="flex gap-2 w-full">
                <h2>Logo</h2>
              </div>
              <div className="lg:flex justify-around gap-4 align-center">
                <MdMenu
                  className="lg:hidden"
                  size={40}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                />
              </div>
            </div>
            <div className="h-10 w-full mt-2">
              <input
                type="text"
                placeholder="search"
                className="border rounded-full p-3 w-full h-full text-left"
              />
            </div>
          </div>
        </div>
        <div
          className={
            toggle
              ? "h-screen z-20 text-center text-white p-4 m-2"
              : "hidden md:visible lg:flex gap-2 text-center text-white"
          }
        >
          <h3>Home</h3>
          <h3>Hits</h3>
        </div>
        <div className="hidden lg:flex justify-around gap-4 align-center">
          <h3 className="border rounded-lg p-2">Sign Up</h3>
          <h3 className="border rounded-lg p-2 lg:visible">Log In</h3>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
