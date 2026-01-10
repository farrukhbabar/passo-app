import React from "react";

const Card = ({ logo, text }) => {
  return (
    <>
      <div
        className="w-full  sm:max-w-[500px] md:max-w-[413px] min-h-[auto] md:min-h-[371px] p-8 md:p-[55px]
               rounded-[30px] bg-[#F6F6F6] mx-auto"
      >
        <div>
          <img
            src={logo}
            alt=""
            className="w-20 h-16 sm:w-24 sm:h-20 md:w-[93px] md:h-[72px] border-none"
          />
        </div>
        <div className="font-normal text-[#4D4D4D] text-[16px] leading-[27px] mt-[30px]">
          {text}
        </div>
      </div>
    </>
  );
};

export default Card;
