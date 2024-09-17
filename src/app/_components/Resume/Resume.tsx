import React from "react";
import { education, experiences, skills } from "../Sidebar/data";
import Image from "next/image";

const Resume = () => {
  return (
    <div className="bg-[#F1F9FA] w-full py-6 font-ebgaramond">
      <div data-aos="fade-up" className=" text-center">
        <h3 className="text-[#969899] md:text-6xl text-3xl font-bold pb-5 font-prociono">
          Resume
        </h3>
        <h5 className="md:text-lg text-base">
          Learn more about my experiences, qualifications and skills.
        </h5>
      </div>
      <div className="md:w-[85%] w-[95%] mx-auto px-4 py-8">
        <h1
          data-aos="fade-left"
          className="text-2xl font-bold mb-8 text-[#189FB0]"
        >
          Experiences
        </h1>
        <div className="relative border-l-2 border-[#189FB0]">
          {experiences.map((experience, index) => (
            <div className="mb-8 ml-4" key={index}>
              <div
                className="absolute w-10 h-10 bg-[#189FB0] rounded-full -left-[20px] flex 
              items-center justify-center border border-white text-white"
              >
                <experience.icon size={25} />
              </div>
              <div className="pl-8">
                <h2
                  className="md:text-2xl textlg font-bold md:font-semibold pb-2"
                  data-aos="fade-left"
                >
                  {experience.title}
                </h2>
                <p
                  className="text-gray-600 pb-2 text-nowrap"
                  data-aos="fade-up"
                >
                  <span className=" bg-[#DBF0F3] p-1 text-center md:text-base text-sm font-bold rounded-sm cursor-pointer mr-1">
                    {experience.company}
                  </span>
                  - {experience.location}
                </p>
                <p data-aos="fade-up" className="text-gray-500 text-sm">
                  {experience.period}
                </p>
                <ul
                  data-aos="fade-up"
                  className="list-disc mt-2 text-gray-700 text-base md:text-lg"
                >
                  {experience.description.map((point, i) => (
                    <li key={i} className="mt-1 leading-9 md:w-[70%] w-full">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-[85%] w-[95%] mx-auto px-4 py-8">
        <h1
          className="text-2xl font-bold mb-8 text-[#189FB0]"
          data-aos="fade-left"
        >
          Education
        </h1>
        <div className="relative border-l-2 border-[#189FB0]">
          {education.map((experience, index) => (
            <div className="mb-8 ml-4" key={index}>
              <div
                className="absolute w-10 h-10 bg-[#189FB0] rounded-full -left-[20px] flex 
              items-center justify-center border border-white text-white"
              >
                <experience.icon size={25} />
              </div>
              <div className="pl-8">
                <h2
                  className="md:text-2xl textlg font-bold md:font-semibold pb-2"
                  data-aos="fade-left"
                >
                  {experience.title}
                </h2>
                <p className="text-gray-600 pb-2" data-aos="fade-up">
                  <span className=" bg-[#DBF0F3] p-1 text-center md:text-base text-sm font-bold rounded-sm cursor-pointer mr-1">
                    {experience.company}
                  </span>
                  - {experience.location}
                </p>
                <p data-aos="fade-up" className="text-gray-500 text-sm">
                  {experience.period}
                </p>
                <ul
                  data-aos="fade-up"
                  className="list-disc mt-2 text-gray-700 text-base md:text-lg"
                >
                  {experience.description.map((point, i) => (
                    <li key={i} className="mt-1 leading-9 md:w-[70%] w-full">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-[85%] w-[95%] mx-auto px-4 py-8 font-ebgaramond">
        <h3
          className="text-3xl pb-4 text-center font-semibold text-[#189FB0]"
          data-aos="fade-left"
        >
          Tools & Technologies
        </h3>
        <div
          className="md:flex md:justify-center md:flex-wrap md:gap-10 pt-4 md:pt-6 grid grid-cols-3 gap-8"
          data-aos="fade-up"
        >
          {skills.map((item, index) => {
            return (
              <div
                className=" bg-white flex justify-center items-center flex-col w-[100px] h-[100px] rounded-lg shadow-md p-3"
                key={index}
              >
                <div className="py-2">
                  <Image
                    src={item.link}
                    alt={item.name}
                    width={50}
                    height={50}
                  />
                </div>
                <h4 className="pb-2 md:text-base text-xs font-bold  md:font-semibold text-[#5F6264]">
                  {item.name}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Resume;
