"use client";
import Image from "next/image";
import React from "react";
import image from "../../../../public/myself.jpg";
const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/mayaTundeOlawaleCV.pdf";
    link.download = "mayaTundeOlawale-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="md:w-[85%] w-[95%] mx-auto font-ebgaramond">
      <div className="flex md:flex-row flex-col items-center md:space-x-16 mt-10 md:mt-20 mb-10">
        <div
          data-aos="flip-left"
          className="p-2 md:bg-[#42CBD7] md:rounded-lg rounded-full shadow-lg border border-[#42CBD7]"
        >
          <Image
            src={image}
            alt="myself"
            width={400}
            height={400}
            className="md:object-contain rounded-full md:rounded-lg
               w-44 h-44 sm:w-48 sm:h-48 md:w-[600px] md:h-fit"
          />
        </div>

        <div
          className="py-6 md:py-0 md:text-left text-center"
          data-aos="zoom-in-up"
        >
          <h3 className="text-[#969899] md:text-6xl text-3xl font-bold pb-2 md:pb-5">
            About Me
          </h3>
          <div className="text-lg leading-10 md:font-ebgaramond font-urbanist">
            <p className="py-3">
              I&apos;m a frontend web developer with over 3 years of experience
              with a strong focus on creating visually appealing, responsive and
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
            data-aos-duration="600"
            className="text-xl font-semibold text-white pt-4 font-urbanist"
          >
            <button
              onClick={handleDownload}
              className="bg-[#42CBD7] px-5 py-2 rounded-md hover:bg-[#42CBD7]/50"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
