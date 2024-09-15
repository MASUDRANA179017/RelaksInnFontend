import React from "react";
import Container from "./Container";
import Title from "./Title";
import Product from "./Product";
import Flex from "./Flex";

const BestSelling = () => {
  return (
    <>
      <Container>
        <Title Headding="Best Selling" />

        <Flex className="">
          <div>
            <Product badge="New" imgSrc="products/Image1.png" />
          </div>
          <div>
            <Product badge="Best Selling" imgSrc="products/Image2.png" />
          </div>
          <div>
            <Product badge="Star" imgSrc="products/Image3.png" />
          </div>
          <div>
            <Product badge="New" imgSrc="products/Image1.png" />
          </div>
          
        </Flex>
      </Container>
    </>
  );
};

export default BestSelling;
