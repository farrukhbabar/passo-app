import React from 'react'
import contactBanner from "../assets/contactBanner.png"

const Contact = () => {
  return (
    <>
      {/* Contac banner */}
            <div
              className="w-full min-h-[351px] bg-center bg-cover flex flex-col justify-center p-10 md:p-20"
              style={{
                backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0)),
              url(${contactBanner})
            `,
              }}
            >
              <h1 className="font-bold w-full max-w-[1400px] mx-auto text-[45px] md:text-[55px] lg:text-[64px]">
                Contact us Today
              </h1>
            </div>
    </>
  )
}

export default Contact
