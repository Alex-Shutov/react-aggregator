import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@shared/Header/HeaderInner";
import HeaderInner from '@shared/Header/HeaderInner';

function Auth() {
  return (
    <div className="h-screen flex flex-col bg-pnl_first">
      <HeaderInner />
      <div className="flex-1 p-8 flex flex-col items-center justify-center bg-pnl_first">
        <div className="p-24 w-[54.2rem] max-w-full mx-auto mb-16 bg-pnl_third">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Auth
