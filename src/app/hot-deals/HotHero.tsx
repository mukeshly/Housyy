import React from "react";
import MainSearch from './MainSearch';
import Header from "@/components/Header";
import Image from "next/image";

const HotDealsSection = () => {

  return (
    <div className="w-full">
      <Header />
      <div className="h-container md:px-20">
        <div className="flex flex-col items-center mt-10">
          <h2 className="text-white text-center font-rubik text-4xl md:text-5xl font-bold leading-normal tracking-[0.1px] mb-10 sm:mb-16">
            What is Housyy Hot Deals?
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
  {/* Row 1 */}
  <div className="flex flex-row items-center gap-4 md:gap-10">
    <div
      className="flex flex-col items-center"
      data-aos="fade-up"
      data-aos-delay={100}
    >
      <div className="relative w-[119px] h-[119px] mb-5 ">
        <Image width={119} height={119} src="/check.png" alt="Check" />
      </div>
      <p className="text-white text-center font-inter text-lg font-normal leading-[22px] tracking-[-0.371px]">
        Verified Title
      </p>
    </div>

    <Image  className="w-12" width={119} height={119} src="/plus.svg" alt="Plus" />

    <div
      className="flex flex-col items-center"
      data-aos="fade-up"
      data-aos-delay={100}
    >
      <div className="relative w-[119px] h-[119px] mb-5">
        <Image width={119} height={119} src="/check.png" alt="Check" />
      </div>
      <p className="text-white text-center font-inter text-lg font-normal leading-[22px] tracking-[-0.371px]">
        Verified Title
      </p>
    </div>
    <Image width={119} height={119} className="hidden md:block w-12" src="/plus.svg" alt="Plus" />

  </div>

  {/* Row 2 */}
  <div className="flex flex-row items-center gap-4 md:gap-10">
    <div
      className="flex flex-col items-center"
      data-aos="fade-up"
      data-aos-delay={100}
    >
      <div className="relative w-[119px] h-[119px] mb-5">
        <Image width={119} height={119} src="/check.png" alt="Check" />
      </div>
      <p className="text-white text-center font-inter text-lg font-normal leading-[22px] tracking-[-0.371px]">
        Verified Title
      </p>
    </div>

    <Image width={119} height={119} src="/equal.svg" alt="Equals" className="w-12 mt-4 md:mt-0" />


    <div
      className="flex flex-col items-center"
      data-aos="fade-up"
      data-aos-delay={100}
    >
      <div className="relative w-[119px] h-[119px] mb-5">
        <Image width={119} height={119} src="/check.png" alt="Check" />
      </div>
      <p className="text-white text-center font-inter text-lg font-normal leading-[22px] tracking-[-0.371px]">
        Verified Title
      </p>
    </div>
  </div>

</div>


      
        </div>
        <MainSearch />
      </div>
    </div>
  );
};

export default HotDealsSection;