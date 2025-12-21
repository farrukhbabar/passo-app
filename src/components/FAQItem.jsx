import React, { useState } from "react";
import upArrow from "../assets/upArrow.png"
import downArrow from "../assets/downArrow.png"

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="faq-item border-b border-[#FFFFFF4D]">
        <div
          className="faq-header flex justify-between pb-6 md:pb-8 "
          onClick={() => setOpen(!open)}
        >
          <p className="text-[#FFFFFF] font-bold text-[20px] md-text-[22px] inline">
            {question}
          </p>
          <span className="text-[#B4B4B4] text-[14px] md:text-[16px] font-regular leading-[24px] md:leading-[27px] cursor-pointer">
            {open ? <div className=""> <img src={upArrow} alt="" /></div>  : <div className=""> <img src={downArrow} alt="" /></div> }
          </span>
        </div>

        {open && (
          <div className="faq-body text-white w-full max-w-[1174px] pb-6 md:pb-8">
            {answer}
          </div>
        )}
      </div>
    </>
  );
};

export default FAQItem;
