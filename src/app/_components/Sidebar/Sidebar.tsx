"use client";
import React, { useState, useEffect } from "react";
import { sidebarData } from "./data";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { ICONS } from "@/utils/icons";

const Sidebar = () => {
  const [active, setActive] = useState("home");
  const [isChecked, setIsChecked] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const handleSetActive = (to: string) => {
    setActive(to);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const audioElement = new Audio("/portfolio.mp3");
      audioElement.loop = true;
      setAudio(audioElement);
    }
  }, []);

  const handleToggle = () => {
    const newStatus = !isChecked;
    setIsChecked(newStatus);

    if (audio) {
      if (newStatus) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audio) audio.pause();
    };
  }, [audio]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="my-16">
          <Image
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maya/maya-original-wordmark.svg"
            }
            alt="logo"
            width={40}
            height={40}
            className="bg-white shadow-lg"
          />
        </div>
        <div
          className="flex flex-col space-y-5 mt-5"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          {sidebarData.map((item) => (
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
          ))}
        </div>
        <div className="flex justify-center items-center flex-col mt-20">
          <div className="pb-5">
            {!isChecked ? (
              <ICONS.musicOff size={30} color="white" />
            ) : (
              <ICONS.music size={30} color="white" />
            )}
          </div>
          <Switch checked={isChecked} onCheckedChange={handleToggle} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
