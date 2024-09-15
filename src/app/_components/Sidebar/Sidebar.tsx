"use client";
import { ICONS } from "@/utils/icons";
import React, { useState } from "react";
import { sidebarData } from "./data";
import { Link as ScrollLink } from "react-scroll";
const Sidebar = () => {
  const [active, setActive] = useState("home");
  const handleSetActive = (to: string) => {
    setActive(to);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center" data->
        <div className="my-16 ">
          <ICONS.maya size={40} color="white" />
        </div>
        <div
          className="flex flex-col space-y-5 mt-5 "
          data-aos="fade-right"
          data-aos-delay="500"
        >
          {sidebarData.map((item) => {
            return (
              <ScrollLink
                key={item.id}
                to={item.name.toLowerCase()}
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={handleSetActive}
                className={`relative group flex cursor-pointer border rounded-full p-3 flex-col justify-center items-center ${
                  active === item.name.toLowerCase() && "bg-white"
                }`}
              >
                <item.icon
                  size={25}
                  className={`${
                    active === item.name.toLowerCase()
                      ? "text-[#189FB0]"
                      : "text-white"
                  }`}
                />

                <span
                  className="absolute bg-white text-black text-base ml-3
                 rounded-md px-2 py-1 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-2 left-12"
                >
                  {item.name}
                </span>
              </ScrollLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
