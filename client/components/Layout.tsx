import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <header className="max-w-[1380px] mx-auto">
        <Navbar />
      </header>
      <main className="flex flex-row max-w-[1380px] mx-auto">
        <Sidebar />
        <div className="py-10 pl-10 w-full bg-theme-dark-black text-white rounded-tl-[70px] max-w-[1380px] mx-auto">
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
