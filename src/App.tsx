import Navbar from "./components/Navbar/Navbar.tsx";
import {Outlet} from "react-router";
import React from "react";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App;