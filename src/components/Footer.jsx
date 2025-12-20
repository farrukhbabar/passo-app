import React from "react";
import Footerimg from "../assets/Footerimg.png";
import Button from "./button";
import logo from "../assets/footerLogo.png";
import { NavLink } from "react-router-dom";
import emailLogo from "../assets/mail.png";
import phoneLogo from "../assets/phone-telephone.png"

const Footer = () => {
  return (
    <>
    {/* Footer Top */}
      <div
        className="w-full min-h-[362px] p-10 md:p-20 flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Footerimg})` }}
      >
        <div className="w-full max-w-[840px] min-h-[190px] flex flex-col items-center justify-between">
          <h1 className="font-bold text-[36px] md:text-[40px] lg:text-[40px] text-center">
            Get More Lessons. Earn More, Effortlessly.
          </h1>
          <p className="font-normal text-[#4D4D4D] text-[14px] md:text-[16px] lg:text-[16px] text-center pt-6 pb-3">
            Join Passo today and manage your driving lessons, bookings, and
            payments all in one place. Stay organized, save time, and focus on
            what matters—teaching
          </p>
          <div>
            <Button
              text={"Download the App"}
              style={{ background: "#FFFFFF" }}
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full min-h-[400px] p-10 md:p-20 ">
        <div className="w-full max-w-[1280px] min-h-[296px] ">

          <div className="w-full min-h-[252px] border-b-[1px] border-[#E6E6E6]">
            <div className=" w-full min-h-[192px] flex flex-col md:flex-row justify-between gap-4 md:gap-10 lg:gap-6">
            {/* logo section */}
            <div className="min-h-[192px] w-full max-w-[335px]  mx-auto md:mx-0">
              <img src={logo} alt="" className=" w-[300px] md:w-[325px] h-[70px] md:h-[80px]"/>
              <p className="font-normal text-[14px] md:text-[16px] mt-6 md:mt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti ad eveniet dolorum, officiis laboriosam odio.
              </p>
            </div>

           <div className="w-full max-w-[700px] flex justify-between gap-4 md:gap-6">
             {/* Quick Links */}
              <div className=" w-full max-w-[150px] min-h-[24px]">
              <ul className="flex flex-col gap-1 md:gap-2">
                <li className="font-semibold text-[20px] md:text-[22px]">Quick Links</li>
                <li className="font-normal text-[14px] md:text-[16px]">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="font-normal text-[14px] md:text-[16px]">
                  <NavLink to="/about">How it works</NavLink>
                </li>
                <li className="font-normal text-[14px] md:text-[16px]">
                  <NavLink to="/contact">Contact us</NavLink>
                </li>
              </ul>
            </div>
            {/* Contacts */}
            <div className=" w-full max-w-[150px] md:max-w-[170px] lg:max-w-[150px]">
              <ul className="flex flex-col gap-1 md:gap-2">
                <li className="font-semibold text-[20px] md:text-[22px]">Contact</li>
                <li className="font-normal text-[14px] md:text-[16px]">Download app</li>
                <li><img src={emailLogo} alt="" className="w-[17px] h-[13px] inline mr-1" /> <span className="font-normal text-[14px] md:text-[16px]">Info@gmail.com</span></li>
                <li><img src={phoneLogo} alt="" className="w-[20px] h-[20px] inline mr-1" /> <span className="font-normal text-[14px] md:text-[16px]">000 0000000</span></li>
              </ul>
            </div>
           </div>

          </div>
          </div>

          <div className="text-center mt-4 md:mt-6 font-normal text-[14px] md:text-[16px] ">
            <p>© Passo! All Rights Reserved 2025</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
