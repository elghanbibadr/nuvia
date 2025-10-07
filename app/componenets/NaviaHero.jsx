import React from "react";
// import headlineText from "./headline-text.svg";
// import union from "./union.svg";
// import vector4Stroke from "./vector-4-stroke.svg";
import icon from "@/public/icon.svg"
import Image from "next/image";
export const NoviaHero = () => {
  return (
    <div className="relative w-[444px] h-[90px] rounded-[32px] overflow-hidden [background:radial-gradient(50%_50%_at_85%_54%,rgba(36,66,101,1)_0%,rgba(23,40,59,1)_85%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
      <div className="absolute top-8 left-[calc(50.00%_-_147px)] [font-family:'Raleway-Bold',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
        Dynamic Price Monitoring
      </div>

      <p className="absolute top-16 left-[calc(50.00%_-_206px)] w-[413px] [font-family:'Raleway-Regular',Helvetica] font-normal text-[#ffffffb2] text-[15px] text-center tracking-[0] leading-[normal]">
        Price tracking ensures the best deals with alerts
        <br />
        for drops and optimal booking times
      </p>
      
      <Image height={400} width={400}  src={icon} alt='' />

      {/* <img
        className="absolute top-[104px] left-0 w-[419px] h-[168px]"
        alt="Union"
        src={union}
      />

      <div className="absolute top-[196px] left-[377px] w-[5px] h-[77px] rotate-[-49.00deg] bg-[linear-gradient(179deg,rgba(145,224,65,0)_21%,rgba(120,201,43,1)_82%)]" />

      <img
        className="absolute top-[123px] left-[calc(50.00%_+_124px)] w-10 h-10"
        alt="Headline text"
        src={headlineText}
      />

      <img
        className="absolute top-[calc(50.00%_+_75px)] left-[calc(50.00%_-_222px)] w-[444px] h-0.5"
        alt="Vector stroke"
        src={vector4Stroke}
      /> */}
    </div>
  );
};
