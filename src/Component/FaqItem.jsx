import React from "react";
// import chapts from "../json/Chapter.json";
import "../../node_modules/animate.css"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/all";

const FaqItem = ({ faq, faqItems }) => {
  return (
    <>
      <div onClick={() => faq(faqItems.id)} className="my-2 bg-white m-auto rounded-lg">
        <div className=" flex justify-between items-center p-3 border ">
          <h1 className="font-philosopher text-xl">Chapter 0{faqItems.id}</h1>
          <span
            className={"text-xl duration-200 "}>{
            faqItems.showAnswer ?  
            <IoIosArrowDown />: 
            <IoIosArrowUp />}
          </span>
        </div>
        {faqItems.showAnswer &&(
            <p className=" p-5">{faqItems.description}</p>
        )
            }
      </div>
    </>
  );
};

export default FaqItem;
