import React from "react";
import landingimg from "../assets/landingimg.png";
import Button from "../components/button";
import sectionimg1 from "../assets/sectionimg1.png"
import sectionimg2 from "../assets/sectionimg2.png"
import sectionvector from "../assets/sectionvector.png"
import "./Home.css"

const Home = () => {
  return (
    <>
      {/* Landing page */}
      <div
        className="min-h-[600px] lg:h-[700px] w-full bg-center bg-cover flex items-center px-4 sm:px-8"
        style={{
          backgroundImage: `
      linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,0.7)),
      url(${landingimg})
    `,
        }}
      >
        <div className="max-w-[1350px] w-full flex flex-col gap-[18px] text-center lg:text-left mx-auto">
          <p className="text-[#9FCB09] font-normal text-[16px] sm:text-[18px]">
            LEARN SMARTER.DRIVE CONFIDENTLY.
          </p>

          <h1 className="font-bold text-[32px] sm:text-[44px] lg:text-[64px] leading-[42px] sm:leading-[56px] lg:leading-[82px]">
            Find the Right Instructor, <br className="hidden sm:block" />
            Manage Lessons Effortlessly
          </h1>

          <p className="font-normal text-[18px] text-[#4D4D4D] leading-[24px] ">
            Book top-rated DVSA instructors, schedule lessons in real time, and
            track your driving progress—all from one <br /> powerful platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mt-4">
            <Button
              text={"Book Your First Lesson"}
              style={{
                background: "#9FCB09",
                width: "252px",
                height: "50px",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "16px",
              }}
            />
            <Button
              text={"Become an Instructor"}
              style={{
                width: "252px",
                height: "50px",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "16px",
                border: "1px solid black",
              }}
            />
          </div>
        </div>
      </div>

      {/* main section */}
      <div className="main-section w-full min-h-screen bg-[#FFFFFF] flex items-center justify-center py-5 md:py-20">
        <div className="main-container w-full max-w-[1380px] m-auto  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 p-6 md:p-4 lg:p-2 items-center   ">
          {/* left side */}
          <div className="text-container w-full max-w-[586px] sm:m-auto md:m-auto lg:m-0  ">
            <p className="text-[#9FCB09] text-[18px] font-medium">FAST & RELIABLE LEARING SOLUTIONS</p>
            <h1 className="text-[40px] font-bold mt-[20px]">Need Driving Lessons? <br />We Can Help!</h1>
            <p className="text-[16px] text-[#4D4D4D] leading-[27px]">
              <br />
              <span>
                Looking to improve your driving skills or find the right
                instructor? Our platform connects learners with certified
                instructors, making it easy to book lessons that fit your
                schedule. Enjoy a smooth, hassle-free experience from booking to
                completion.
              </span>
              <br />
              <br />
              
              <span>
                Whether you’re preparing for your driving test or want to
                enhance your skills for daily commuting, our vetted instructors
                provide expert guidance to help you succeed confidently and
                safely.
              </span>
              <br /><br /><br />
              <span>
                We also provide detailed tracking of your completed lessons,
                upcoming sessions, and payment status — so you always know where
                you stand. Get in touch with our support team for guidance or
                explore instructors near you to start your learning journey
                today.
              </span>
            </p>
            <div className="btns flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mt-[60px]">
            <Button
              text={"Chat with an Instructor"}
              style={{
                background: "#9FCB09",
                width: "252px",
                height: "50px",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "16px",
              }}
            />
            <Button
              text={"Book a Lesson"}
              style={{
                width: "252px",
                height: "50px",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "16px",
                border: "1px solid black",
              }}
            />
          </div>
          </div>

          {/* Right side */}
          <div className="img-container w-full max-w-[611px] h-[833px] relative sm:m-auto md:m-auto ">
           <div className="img-1 w-full max-w-[80%]  h-[400px] md:h-[500px] lg:h-[573px] relative">
            <img src={sectionimg1} alt="" className="rounded-[40px] object-cover h-full w-full absolute top-0 left-[25%]  z-10"/>
           </div>
           <div className="vector-img absolute  max-w-[70%] top-[23%] left-[30%]  ">
            <img src={sectionvector} alt="" className=" md:h-[400px] lg:h-[500px]"/>
           </div>
           <div className="img-2 w-full max-w-[70%] h-[360px] md:h-[400px] lg:h-[456px] rounded-[40px] relative" >
            <img src={sectionimg2} alt="" className=" border-[16px] border-[#9FCB09] rounded-[40px] object-cover w-full h-full absolute bottom-[45%] z-20"/>
           </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
