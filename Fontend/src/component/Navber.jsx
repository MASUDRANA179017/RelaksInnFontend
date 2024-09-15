import { useEffect, useState } from "react";
import Container from "./Container";
import List from "./List";
import ListItem from "./ListItem";
import Image from "./image";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";



const Navbar = () => {
  let [menu, setMenu] = useState(true);
  let handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    function navbarMenu(e) {
      if (window.innerWidth < 1024) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    }
    navbarMenu();
    window.addEventListener("resize", navbarMenu);
  }, []);

  const navItems = [
    { item: "Home" },
    { item: "Service" },
    { item: "About us" },
    { item: "Portfolio" },
    { item: "Blog" },
    { item: "Contact us" },
    { item: "Download CV" },
    { item: "Download" },
  ];

  return (
    <nav className="bg-white py-8 z-50">
      <Container>
        <Flex className="justify-between items-center ">
          <Image src="image/Logo.png" alt="Logo" />
          {menu ? (
            <IoCloseSharp
              onClick={handleMenu}
              className="lg:hidden absolute top-7 right-4"
            />
          ) : (
            <FaBarsStaggered
              onClick={handleMenu}
              className="lg:hidden absolute top-7 right-4"
            />
          )}

          <List
            className={`${
              menu
                ? "gap-10 lg:flex absolute top-14 left-0 pl-5 w-full lg:w-auto bg-secendary lg:bg-white lg:static duration-500 z-50 "
                : "gap-10 lg:flex absolute pl-5 w-full lg:w-auto bg-secendary lg:bg-white lg:static duration-500 top-[-100%]"
            }`}
          >

            {
              navItems.map((a)=>(
                <ListItem className="p-3 lg:p-0">
                  <Link className=" text-sm text-white lg:text-secendary font-normal lg:hover:text-primary duration-100 hover:font-bold ">
                    {a.item}
                  </Link>
                </ListItem>
              ))
            }



          </List>
        </Flex>
      </Container>
    </nav> 
  );
};

export default Navbar;
