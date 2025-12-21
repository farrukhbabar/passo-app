import React from "react";
import FeatureBannerimg from "../assets/FeatureBannerimg.png";
import Button from "./button";

const FeatureBanner = ({
  tagLine,
  tilte,
  descriptionTop,
  descriptionBottom,
}) => {
  return (
    <>
      <div
        className="w-full max-w-[1380px] px-4 md:px-10 py-4 md:py-6 min-h-[496px] bg-cover bg-center  mx-auto flex items-center justify-center rounded-[40px]"
        style={{
          backgroundImage: `url(${FeatureBannerimg})`,
        }}
      >
        <div className="text w-full max-w-[1153px] flex flex-col items-center text-center gap-4 sm:gap-6">
          <p className="font-medium text-[14px] sm:text-[16px] md:text-[18px]">{tagLine}</p>
          <h1 className="font-bold text-[24px] sm:text-[32px] md:text-[40px] leading-tight">{tilte}</h1>
          <div className="font-normal text-[14px] sm:text-[15px] md:text-[16px] max-w-[900px] text-center text-wrap">
            <p>{descriptionTop}</p> <br />
            <p>{descriptionBottom}</p>
          </div>
          <Button
            text={"Find your instructor now"}
            style={{
              background: "#FFFFFF",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default FeatureBanner;
