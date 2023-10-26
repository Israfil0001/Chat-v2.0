import React from "react";
import TopBar from "../TopBar/TopBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <TopBar />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
