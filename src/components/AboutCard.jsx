import React from 'react'


const AboutCard = ({logo,heading,text}) => {
  return (
    <>
      <div
        className="w-full sm:max-w-[500px] md:max-w-[302px] min-h-[auto] md:min-h-[433px] p-[15px] md:p-[25px]
               rounded-[12px] bg-[#F6F6F6] mx-auto "
      >
        <div>
          <img
            src={logo}
            alt=""
            className="w-20 h-16 sm:w-24 sm:h-[75px] md:w-[93px] md:h-[72px] "
          />
        </div>
        <div className='font-bold text-[18px] md:text-[20px] lg:text-[22px] mt-2 md:mt-4'>
            {heading}
        </div>
        <div className="font-normal text-[#4D4D4D] text-[16px] leading-[27px] mt-2 md:mt-4">
          {text}
        </div>
      </div> 
    </>
  )
}

export default AboutCard
