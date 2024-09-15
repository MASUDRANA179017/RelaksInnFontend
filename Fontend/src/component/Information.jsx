import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { TbTruckDelivery,TbReload } from "react-icons/tb";



const Information = () => {
  return (
    <div className="border-b-2">
      <Container >
        <Flex className=" justify-between align-middle gap-6 p-8 items-center ">
          <div className="font-dmSans text-xl">
            <span className=" font-bold text-2xl">2</span> Two years warranty
          </div>
          <div className="flex justify-between items-center gap-2 font-dmSans font-normal text-xl">
            <span><TbTruckDelivery/></span> Free shipping
          </div>
          <div className="flex justify-between items-center gap-2 font-dmSans font-normal text-xl">
            <span><TbReload/></span> Return policy in 30 days
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Information;
