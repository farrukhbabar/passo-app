import React from "react";
import aboutBanner from "../assets/aboutBanner.png";
import aboutsectionimg from "../assets/aboutsectionimg.png";
import Button from "../components/button";
import FeatureBanner from "../components/FeatureBanner";
import AboutCard from "../components/AboutCard";
import cardLogo1 from "../assets/cardLogo1.png";

const About = () => {
  return (
    <>
      {/* about banner */}
      <div
        className="w-full min-h-[351px] bg-center bg-cover flex flex-col justify-center p-10 md:p-20"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0)),
        url(${aboutBanner})
      `,
        }}
      >
        <h1 className="font-bold w-full max-w-[1400px] mx-auto text-[45px] md:text-[55px] lg:text-[64px]">
          How it Works
        </h1>
      </div>

      {/*Benefits */}
      <div className="w-full min-h-[870px] bg-[rgba(255, 255, 255, 1)] p-10 md:p-20 ">
        <div className="w-full max-w-[1380px] mx-auto min-h-[734px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Right side */}
          <div className=" w-full max-w-[611px] mx-auto ">
            <img
              src={aboutsectionimg}
              alt=""
              className="w-full h-[500px] md:h-[680px] lg:h-[734px] object-contain "
            />
          </div>

          {/* Left side */}
          <div className="w-full max-w-[607px] h-[auto] md:h-[588px] mx-auto">
            <p className="font-medium text-[#9FCB09] text-[14px] md:text-[16px] lg:text-[18px]">
              FEATURES AND BENEFITS
            </p>
            <h1 className="font-bold text-[34px] sm:text-[36px] md:text-[38px] lg:text-[40px] mt-4 md:mt-6 max-w-[400px] md:max-w-[500px]">
              All the Your Need in One Place
            </h1>
            <p className="font-normal text-[#4D4D4D] text-[12px] sm:text-[14px] md:text-[16px] mt-4 md:mt-6 max-w-[400px] md:max-w-[500px]">
              Passo gives instructors and learners everything they need to
              manage driving lessons effortlessly. From real-time booking,
              availability management, and lesson tracking to secure
              payments—everything is designed to save time, reduce hassle, and
              boost productivity.
            </p>
            <ul className="text-[#4D4D4D] text-[12px] sm:text-[14px] md:text-[16px] list-disc pl-5 mt-4 md:mt-6">
              <li>Real-time instructor availability</li>
              <li>Instant lesson booking and approvals</li>
              <li>Secure payment handling</li>
              <li>Student progress tracking and insight.</li>
            </ul>
            <div className="btns flex flex-row sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mt-[70px] md:mt-[70px] lg:mt-[100px]">
              <Button
                text={"Chat with Instructor"}
                style={{
                  background: "#9FCB09",
                }}
              />
              <Button
                text={"Book a Lesson"}
                style={{
                  border: "1px solid black",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="w-full bg-[#F6F6F6]  p-5 sm:p-8 md:p-20">
        <FeatureBanner
          tagLine={"Trusted & Verified Instructors"}
          tilte={"Learn from Certified Professionals"}
          descriptionTop={
            "Every instructor on Passo is DVSA-approved, experienced, and verified. Learners can trust they are booking with top-quality instructors, while instructors gain exposure to serious students ready to learn. Quality and safety, guaranteed."
          }
        />
      </div>

      {/* Cards section */}
      <div className="w-full min-h-[657px] p-10 md:p-20">
        <div>
          <h1 className="font-bold text-[30px]   pb-8 md:pb-12 lg:pb-14 w-full max-w-[267px] mx-auto md:mx-10 ">
            How it Works
          </h1>
        </div>
        <div className="w-full max-w-[1380px] min-h-[433px]  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          <div>
            <AboutCard
              logo={cardLogo1}
              heading={"Sign Up & Create Your Profile"}
              text={
                "Set up your instructor or learner account in minutes. Add your driving instructor credentials, availability, and teaching preferences to start connecting with students immediately."
              }
            />
          </div>
          <div>
            <AboutCard
              logo={cardLogo1}
              heading={"Sign Up & Create Your Profile"}
              text={
                "Set up your instructor or learner account in minutes. Add your driving instructor credentials, availability, and teaching preferences to start connecting with students immediately."
              }
            />
          </div>
          <div>
            <AboutCard
              logo={cardLogo1}
              heading={"Sign Up & Create Your Profile"}
              text={
                "Set up your instructor or learner account in minutes. Add your driving instructor credentials, availability, and teaching preferences to start connecting with students immediately."
              }
            />
          </div>
          <div>
            <AboutCard
              logo={cardLogo1}
              heading={"Sign Up & Create Your Profile"}
              text={
                "Set up your instructor or learner account in minutes. Add your driving instructor credentials, availability, and teaching preferences to start connecting with students immediately."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
