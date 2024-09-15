import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./image";

const AdsSection = () => {
  return (
    <>
      <Container>
        <div className="sm:mt-4 lg:mt-[170px] inline-block ">
          <Flex className="float-start gap-5 sm:flex-row lg:flex-row">
            <div>
              <Image src="image/ad_1.png" />
            </div>
            <Flex className="gap-5 sm:flex-col lg:flex-col">
              <div>
                <Image src="image/ad_2.png" />
              </div>
              <div>
                <Image src="image/ad_3.png" />
              </div>
            </Flex>
          </Flex>
        </div>
      </Container>
    </>
  );
};

export default AdsSection;
