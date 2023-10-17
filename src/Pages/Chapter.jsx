import React, { useState } from "react";
import chpts from "../json/Chapter.json";
import { IoIosArrowDown } from "react-icons/all";
import FaqItem from "../Component/FaqItem";

const Chapter = () => {
  const [faqItem, setFaqItem] = useState(chpts.chapter.faqItem);

  const faq = (id) => {    
    console.log(id)

    setFaqItem(
      faqItem.map((faqItems) => {
        
        if (faqItems.id === id) {
            console.log(faqItems.id)
          faqItems.showAnswer = !faqItems.showAnswer;
        } else {
            // console.log(faqItems.showAnswer)
          faqItems.showAnswer = false;
        
        }
        return faqItems;
      })
    );
    
  };

  
  return (
    <div className="container mx-auto my-5">
      <div className="flex justify-center">
        <div className=" text-center">
          <h1 className=" text-lg font-semibold tracking-widest font-poppins text-[#c27b7f]">
            {chpts.chapter.header}
          </h1>
          <h1 className="text-4xl font-philosopher">{chpts.chapter.title}</h1>
        </div>
      </div>
      <div className="md:grid grid-cols-2 mt-24">
        <div className="">
          <img src={chpts.chapter.img} alt="" className=" w-96 mx-auto" />
        </div>
        <div className="">
          {faqItem.map((faqItems) => (
            <FaqItem
              
              faq={faq}
              faqItems={faqItems}
              key={faqItems.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chapter;
