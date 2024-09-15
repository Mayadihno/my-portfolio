import React from "react";
import { experiences } from "../Sidebar/data";

const Resume = () => {
  return (
    <div className="bg-[#F1F9FA] w-full py-6">
      <div className=" text-center">
        <h3 className="text-[#969899] text-6xl font-bold pb-5">Resume</h3>
        <h5>Learn more about my experiences, qualifications and skills.</h5>
      </div>
      <div className="w-[85%] mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8 text-[#189FB0]">Experiences</h1>
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
                <h2 className="text-2xl font-semibold pb-2">
                  {experience.title}
                </h2>
                <p className="text-gray-600 pb-2">
                  <span className=" bg-[#DBF0F3] p-1 text-center rounded-sm cursor-pointer mr-1">
                    {experience.company}
                  </span>
                  - {experience.location}
                </p>
                <p className="text-gray-500 text-sm">{experience.period}</p>
                <ul className="list-disc mt-2 text-gray-700">
                  {experience.description.map((point, i) => (
                    <li key={i} className="mt-1 leading-9 w-[70%]">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
