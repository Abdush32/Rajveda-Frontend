import React from "react";
import { Outlet } from "react-router-dom";
import FrontHeader from "./FrontHeader";
import FrontFooter from "./FrontFooter";

function Index() {
  return (
    <div>
      <FrontHeader />
      <Outlet />
      <FrontFooter />
    </div>
  );
}

export default Index;
