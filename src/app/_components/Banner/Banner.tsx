/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { bannerIcon } from "../Sidebar/data";
import Link from "next/link";
import { ICONS } from "@/utils/icons";
import { Link as ScrollLink } from "react-scroll";

const Banner = () => {
  return (
    <div className="banner-bg relative w-full md:h-screen h-[75vh] flex justify-center items-center font-ebgaramond">
      <div
        className="flex flex-col text-center text-slate-100"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <h3 className="text-3xl" data-aos="fade-left" data-aos-duration="1000">
          Hello, I'm
        </h3>
        <h1
          className=" text-6xl font-bold py-8 md:py-5 text-white"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Maya Tunde Olawale
        </h1>
        <div className="flex space-x-3 justify-center items-center">
          <div className="w-3 h-3 rounded-full bg-white" />
          <h4
            className="text-xl font-semibold"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Frontend Web Developer
          </h4>
        </div>
        <div className="flex items-center justify-center my-8 space-x-5 md:my-5">
          {bannerIcon.map((item) => {
            return (
              <div className="" key={item.id} data-aos="fade-up-right">
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon size={25} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="absolute bottom-3 bg-[#189FB0] p-3 rounded-full cursor-pointer animate-bounce"
      >
        <ScrollLink smooth={true} duration={500} spy={true} to="contact">
          <ICONS.arrowDown size={25} color="white" />
        </ScrollLink>
      </div>
    </div>
  );
};

export default Banner;
