"use client";
import { ICONS } from "@/utils/icons";
import React, { useState } from "react";
import { sidebarData } from "./data";

const Sidebar = () => {
  const [active, setActive] = useState("home");
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    setActive(section?.id ?? "home");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  console.log(active);
  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <div className="my-20">
          <ICONS.logo size={30} />
        </div>
        <div className="flex flex-col space-y-5 ">
          {sidebarData.map((item) => {
            return (
              <div
                key={item.id}
                className={`relative group flex cursor-pointer border rounded-full p-3 flex-col justify-center items-center ${
                  active === item.name.toLowerCase() && "bg-white"
                }`}
                onClick={() => handleScroll(item.name.toLowerCase())}
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
                 rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-1 left-12"
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
