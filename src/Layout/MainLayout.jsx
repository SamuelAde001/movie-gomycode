import React from "react";
import { Outlet } from "react-router";
import { NavBar } from "../components/NavBar";

export const MainLayout = () => {
  return (
    <>
      {/* Navbar layout constant throughtout the pages */}
      <NavBar />

      {/* Children of the Mainlayout */}
      <Outlet />
    </>
  );
};
