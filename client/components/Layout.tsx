import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }: any) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-row">
        <Sidebar />
        <div className="py-10 pl-10 w-full bg-theme-dark-black text-white rounded-tl-[70px]">
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
