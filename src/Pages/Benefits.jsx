import React, { useEffect } from "react";
import benefits from "../json/benefit.json";
import AOS from "aos";
import "aos/dist/aos.css";
// import ebook from "../images/achieve2.jpg";

const Benefits = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  // const benefits = data;
  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-center">
        <div className=" text-center">
          <h1 className=" text-lg font-semibold tracking-widest font-poppins text-[#c27b7f]">
            {benefits.achieve.header}
          </h1>
          <h1 className="text-4xl font-philosopher">
            {benefits.achieve.title}
          </h1>
        </div>
      </div>
      <div className="md:grid grid-flow-row grid-cols-2 mt-24">
        <div className="">
          <div
            data-aos="fade-down"
            className=" w-1/2  bg-[#c27b7f] m-auto p-52 relative rounded -z-10"
          >
            <img
              src={benefits.achieve.image}
              alt=""
              className="w-full h-full shadow-lg absolute -top-5 left-4 rounded mx-auto"
            />
          </div>
        </div>
        <div className="sm:grid grid-cols-2 gap-4">
        {benefits.achieve.achieveItem.map((benefit) => (
          <div
            data-aos="fade-left"
            key={benefit.id}
            className="w-full my-5 md:my-0 col-span-1 row-span-1 border shadow-lg p-3 rounded"
          >
            <div className="rounded shadow bg-[#876585] p-7 w-10 relative">
              <div className="absolute w-full h-full bg-[#c27b7f] p-2 rounded top-1 -left-1"><img className="w-12 mx-auto" src={benefit.icons} alt="" />
              </div>
            </div>
            <h1 className="w-36 font-normal font-philosopher text-2xl my-3">
              {benefit.title}
            </h1>
            <p className=" font-normal text-gray-500">{benefit.description.substring(0,50)}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
