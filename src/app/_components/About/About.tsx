import Image from "next/image";
import React from "react";
import image from "../../../../public/myself.jpg";
const About = () => {
  return (
    <div className="w-[85%] mx-auto font-ebgaramond">
      <div className="flex items-center space-x-16 mt-20 mb-10">
        <div
          data-aos="flip-left"
          className="bg-[#42CBD7] p-2 rounded-lg shadow-lg border border-[#42CBD7]"
        >
          <Image
            src={image}
            alt="myself"
            width={400}
            height={400}
            className="w-full h-full rounded-lg object-contain"
          />
        </div>
        <div className="" data-aos="zoom-in-up">
          <h3 className="text-[#969899] text-6xl font-bold pb-5">About Me</h3>
          <div className=" text-lg leading-10">
            <p className="py-3">
              I'm a frontend web developer with over 3 years of experience with
              a strong focus on creating visually appealing, responsive and
              scalable websites and web applications.
            </p>
            <p>
              Feel free to connect and share your project ideas and I would be
              delighted to collaborate with you and help bring your ideas into
              reality. I look forward to hearing from you!
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            className="text-xl font-semibold text-white pt-4 font-urbanist"
          >
            <button className=" bg-[#42CBD7] px-5 py-2 rounded-md hover:bg-[#42CBD7]/50">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
