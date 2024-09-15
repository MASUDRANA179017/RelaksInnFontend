import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { FaGripLines } from "react-icons/fa6";
import List from "./List";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import Input from "./Input";
import { IoIosSearch } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { IoMdCart, IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

import Image from "./image";

const Header = () => {
  let [categoryModal, setCategoryModal] = useState(false);
  let [userAccountModal, setUserAccountModal] = useState(false);
  let [cartModal, setCartModall] = useState(false);

  let categoryRef = useRef();

  let userAccountRef = useRef();
  let cartModalRef = useRef();

  // let handleCategoryMenu =()=>{
  //   setCategoryModal (!categoryModal)
  // }

  useEffect(() => {
    document.addEventListener("click", function (e) {
      if (categoryRef.current) {
        // Check if categoryRef has a value
        if (categoryRef.current.contains(e.target)) {
          setCategoryModal(true);
        } else {
          setCategoryModal(false);
        }
        if (userAccountRef.current.contains(e.target)) {
          setUserAccountModal(true);
        } else {
          setUserAccountModal(false);
        }
        if (cartModalRef.current.contains(e.target)) {
          setCartModall(true);
        } else {
          setCartModall(false);
        }
      }
    });
  });

  return (
    <header className="bg-headerbg py-6">
      <Container>
        <Flex className="justify-between items-center">
          <Flex dref={categoryRef} className="gap-4 relative items-center">
            <FaGripLines />
            <h4 className=" hidden lg:block tex-sm text-primary select-none ">
              Shop by Category
            </h4>
            {categoryModal && (
              <List className="absolute top-10 left-0 w-[260px] bg-primary text-white  z-50">
                <ListItem className="border-b border-[#2D2D2D]">
                  <Link className="font-normal py-4 pl-5 inline-block hover:font-bold hover:ml-3 duration-500 ">
                    Accesories
                  </Link>
                </ListItem>
                <ListItem className="border-b border-[#2D2D2D]">
                  <Link className="font-normal py-4 pl-5 inline-block hover:font-bold hover:ml-3 duration-500 ">
                    Furniture
                  </Link>
                </ListItem>
                <ListItem className="border-b border-[#2D2D2D]">
                  <Link className="font-normal py-4 pl-5 inline-block hover:font-bold hover:ml-3 duration-500 ">
                    Electronics
                  </Link>
                </ListItem>
                <ListItem className="border-b border-[#2D2D2D]">
                  <Link className="font-normal py-4 pl-5 inline-block hover:font-bold hover:ml-3 duration-500 ">
                    Clothes
                  </Link>
                </ListItem>
                <ListItem className="border-b border-[#2D2D2D]">
                  <Link className="font-normal py-4 pl-5 inline-block hover:font-bold hover:ml-3 duration-500 ">
                    Bags
                  </Link>
                </ListItem>
                <ListItem className="border-b border-[#2D2D2D]">
                  <Link className="font-normal py-4 pl-5 inline-block hover:font-bold hover:ml-3 duration-500 ">
                    Home appliances
                  </Link>
                </ListItem>
              </List>
            )}
          </Flex>
          <div className="relative sm:w-[85%] lg:w-[600px]">
            <Input
              className="w-full h-[50px] bg-white pl-5  focus:outline-none placeholder:text-sm lg:placeholder:text-base placeholder:text-[0px] lg:placeholder:block "
              type="text"
              placeholder="Search Products"
            />
            <IoIosSearch className="absolute top-4 right-4" />
          </div>

          <Flex className="relative gap-5 ">
            <div ref={userAccountRef} className="flex">
              <FaUserAlt className=" cursor-pointer " />
              {userAccountModal ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              {userAccountModal && (
                <List className="absolute top-10 left-[-250px] w-[260px] bg-primary text-white  z-50">
                  <ListItem className="border-b border-[#2D2D2D] hover:bg-white hover:text-black">
                    <Link
                      to={"/admin"}
                      className="font-normal py-4 pl-5 inline-block hover:font-bold hover:ml-3 duration-500 "
                    >
                      My Account
                    </Link>
                  </ListItem>
                  <ListItem className="border-b border-[#2D2D2D] hover:bg-white hover:text-black">
                    <Link className="font-normal py-4 pl-5 inline-block hover:font-bold hover:ml-3 duration-500 ">
                      Log Out
                    </Link>
                  </ListItem>
                </List>
              )}
            </div>
            <div ref={cartModalRef}>
              <IoMdCart className=" cursor-pointer" />
              {cartModal && (
                <List className="absolute top-10 left-[-285px] w-[360px] bg-headerbg text-primary  z-50">
                  <ListItem className=" p-4">
                    <Flex className="justify-between items-center py-5">
                      <div className="w-[80px] bg-[#D8D8D8]">
                        <Image src="image/mars.png" alt="" />
                      </div>
                      <div>
                        <p>Black Smart Watch</p>
                        <p>$44.00</p>
                      </div>
                      <div>
                        <IoCloseSharp />
                      </div>
                    </Flex>
                  </ListItem>
                  <ListItem className="bg-white">
                    <div className="justify-between items-center p-5 ">
                      <div className="my-5 font-dmSans text-base">
                        Subtotal: <span className="font-bold">$44.00</span>
                      </div>
                      <Flex className="justify-between items-center ">
                        <Link className="bg-white py-3 px-8 border border-[#2D2D2D] hover:bg-primary hover:text-white">
                          View Cart
                        </Link>
                        <Link className="bg-white py-3 px-8 border border-[#2D2D2D] hover:bg-primary hover:text-white">
                          Checkout
                        </Link>
                      </Flex>
                    </div>
                  </ListItem>
                </List>
              )}
            </div>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
