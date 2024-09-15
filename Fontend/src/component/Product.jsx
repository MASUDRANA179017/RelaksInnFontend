
import React from "react";
import { AiFillHeart, AiOutlineReload } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";

import Image from "./image";
import List from "./List";
import Flex from "./Flex";
import Badge from "./Badge";
const Product = ({badge, imgSrc}) => {
  return (
    <div className="p-3">
      <div className="relative max-w-[370px] overflow-hidden group">
        <Image alt="product image " src={imgSrc} />
        <Badge badge={badge}/>

        <List className="bg-white w-full absolute bottom-0 p-5 -mb-40 group-hover:mb-0 transform duration-300">
          <Flex className="font-primaryFont justify-end gap-2  cursor-pointer hover:mx-2 transform duration-300">
            <span>Add to Wish List</span>
            <AiFillHeart />
          </Flex>
          <Flex className="gap-2 justify-end p-2 cursor-pointer hover:mx-2 transform duration-300">
            <span>Compare</span>
            <AiOutlineReload />
          </Flex>
          <Flex className="gap-2 justify-end p-2 cursor-pointer hover:mx-2 transform duration-300">
            <span>Add to Cart</span>
            <FaCartArrowDown />
          </Flex>
        </List>
      </div>
      <div>
        <Flex className="justify-between py-4">
          <h3 className=" font-bold">Basic Crew Neck Tee Copy</h3>
          <span className=" text-base">$44.00</span>
        </Flex>
        <h6>black</h6>
      </div>
    </div>
  );
};

export default Product;