import React from "react";
import "./Home.css";
import landingimg from "../assets/landingimg.png";
import Button from "../components/button";
import homeimg from "../assets/homeimg.png";
import FeatureBanner from "../components/FeatureBanner";
import Card from "../components/Card";
import cardLogo1 from "../assets/cardLogo1.png";
import cardLogo2 from "../assets/cardLogo2.png";
import cardLogo3 from "../assets/cardLogo3.png";
import FAQItem from "../components/FAQItem";

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

          <div className="flex  gap-4 sm:gap-6 justify-center lg:justify-start mt-4">
            <Button
              text={"Book Your First Lesson"}
              style={{
                background: "#9FCB09",
              }}
            />
            <Button
              text={"Become an Instructor"}
              style={{
                border: "1px solid black",
              }}
            />
          </div>
        </div>
      </div>

      {/* main section */}
      <div className="main-section w-full min-h-screen bg-[#FFFFFF] flex items-center justify-center p-5 md:p-20">
        <div className="main-container w-full max-w-[1380px] m-auto  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 p-6 md:p-4 lg:p-2 items-center   ">
          {/* left side */}
          <div className="text-container w-full max-w-[586px] sm:m-auto md:m-auto lg:m-0  ">
            <p className="text-[#9FCB09] text-[18px] font-medium">
              FAST & RELIABLE LEARING SOLUTIONS
            </p>
            <h1 className="text-[40px] font-bold mt-[20px]">
              Need Driving Lessons? <br />
              We Can Help!
            </h1>
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
              <br />
              <br />
              <br />
              <span>
                We also provide detailed tracking of your completed lessons,
                upcoming sessions, and payment status — so you always know where
                you stand. Get in touch with our support team for guidance or
                explore instructors near you to start your learning journey
                today.
              </span>
            </p>
            <div className="btns flex flex-row sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mt-[60px]">
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

          {/* Right side */}
          <div className=" w-full max-w-[611px] mx-auto ">
            <img
              src={homeimg}
              alt=""
              className=" h-[600px] md:h-[790px] lg:h-[833px] object-contain w-full "
            />
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="w-full  bg-[#F6F6F6]  p-5 md:p-20">
        <FeatureBanner
          tagLine={"FROM BEGINNER TO CONFIDENT DRIVER"}
          tilte={"Expert Instructors Who Understand Your Learning Needs"}
          descriptionTop={
            "Our certified DVSA instructors are experienced in teaching learners of all levels, whether it’s your first lesson or preparing for the driving test. They provide personalized guidance to ensure you gain confidence, skills, and safe driving habits."
          }
          descriptionBottom={
            "We connect you with instructors for all vehicle types, including manual, automatic, and specialized training vehicles, ensuring every lesson meets your individual requirements"
          }
        />
      </div>

      {/* Lesson-Booking section */}
      <div className="w-full min-h-[814px] p-10 md:p-20 ">
        <div className="w-full max-w-[1380px]  mx-auto flex flex-col gap-16">
          {/* text */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <p className="font-normal text-[#9FCB09] text-[14px] md:text-[18px] lg:text-[18px]">
                Why Choose Our Platform
              </p>
              <h1 className="font-bold text-[36px] md:text-[40px] lg:text-[40px]">
                Smart, safe, and seamless driving-lesson booking
              </h1>
            </div>
            <div>
              <p className="font-normal max-w-[580px] text-[#4D4D4D] text-[14px] md:text-[16px] lg:text-[16px] leading-[27px] ">
                We make learning to drive simple, transparent, and stress-free.
                Pupils can easily find verified instructors, compare prices, and
                book lessons in minutes. Instructors get powerful tools to
                manage availability, earnings, and bookings effortlessly. <br />{" "}
                A platform built for trust, convenience, and real results.
              </p>
            </div>
          </div>

          {/* cards */}
          <div className="w-full min-h-[371px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <Card
                logo={cardLogo1}
                text={
                  "Instantly see which instructors are available and book lessons without waiting. Our live updates reduce cancellations and scheduling conflicts, giving you peace of mind."
                }
              />
            </div>
            <div>
              <Card
                logo={cardLogo2}
                text={
                  "Know the cost upfront—no hidden fees. Compare rates, view hourly charges, and receive accurate quotes before confirming your lesson."
                }
              />
            </div>
            <div>
              <Card
                logo={cardLogo3}
                text={
                  "All instructors are DVSA-approved and vetted for quality. Learn confidently knowing you’re in the hands of experienced professionals."
                }
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="w-full max-w-[700px] mx-auto flex flex-col md:flex-row items-center justify-center gap-8 ">
            <Button
              text={"Please Quote to Pupil"}
              style={{ background: "#9FCB09" }}
            />
            <Button
              text={"Manual Booking"}
              style={{ border: "1px solid black" }}
            />
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="w-full min-h-[792px] bg-[#222222] p-10 md:p-20 ">
        <div className="w-full max-w-[1380px] mx-auto">
          {/* FAQ top */}
          <div className="w-full max-w-[1000px] min-h-[79px] mx-auto  text-center pt-2 md:pt-4">
            <h1 className="font-bold text-[#FFFFFF] text-[36px] md:text-[40px] ">
              Frequently Asked Question
            </h1>
            <p className="font-normal text-[#B4B4B4] text-[14px] md:text-[16px] mt-4 md:mt-5">
              Check out these FAQs for helpful information about our tyre repair
              services and what to do when you have a tyre issue.
            </p>
          </div>

          {/* FAQ bottom */}
          <div className=" min-h-[517px] flex flex-col justify-around ">
            <FAQItem
              question={"How do I book a lesson?"}
              answer={
                "Booking a lesson is simple and convenient. You can search for instructors based on location, availability, and ratings, then compare prices and experience. Once you choose, confirm your lesson instantly and receive real-time reminders for a smooth learning experience."
              }
            />

            <FAQItem
              question={"Are the instructors verified?"}
              answer={
                "Booking a lesson is simple and convenient. You can search for instructors based on location, availability, and ratings, then compare prices and experience. Once you choose, confirm your lesson instantly and receive real-time reminders for a smooth learning experience."
              }
            />

            <FAQItem
              question={"Can I see instructor availability in real-time?"}
              answer={
                "Booking a lesson is simple and convenient. You can search for instructors based on location, availability, and ratings, then compare prices and experience. Once you choose, confirm your lesson instantly and receive real-time reminders for a smooth learning experience."
              }
            />

            <FAQItem
              question={"How is payment handled?"}
              answer={
                "Booking a lesson is simple and convenient. You can search for instructors based on location, availability, and ratings, then compare prices and experience. Once you choose, confirm your lesson instantly and receive real-time reminders for a smooth learning experience."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
