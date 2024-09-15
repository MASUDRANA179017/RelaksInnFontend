
import { Outlet } from "react-router-dom";
import Navbar from "../Navber";
import Header from "../Header";




const Rootlayout = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Outlet />
      <h1> footer </h1>
    </>
  );
};

export default Rootlayout;
