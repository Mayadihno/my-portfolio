"use client";
import { ICONS } from "@/utils/icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarData } from "../Sidebar/data";
import { Link as ScrollLink } from "react-scroll";
import { Switch } from "@/components/ui/switch";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [isChecked, setIsChecked] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [show, setShow] = useState(true);

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
    setShow(false);
  };

  useEffect(() => {
    return () => {
      if (audio) audio.pause();
    };
  }, [audio]);

  return (
    <div>
      <div className="md:hidden block">
        {show && (
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="fixed w-full h-screen top-0 left-0 bg-[#000000b0] z-50 flex justify-center items-center"
          >
            <div className="relative p-6 md:hidden block w-[95%] mx-auto bg-[#189FB0] shadow-xl rounded-md">
              <div className="flex justify-center items-center flex-col">
                <div className=" bg-white rounded-full w-[60px] h-[60px] flex justify-center items-center">
                  <ICONS.music size={40} color="#189FB0" />
                </div>
                <h3 className="text-white font-semibold text-3xl py-6">
                  Enable Music
                </h3>
                <p className="text-center text-white text-lg leading-8 pb-6">
                  Explore my portfolio with music to add depth to your visit.
                  You have the option to toggle it on or off anytime from the
                  navigation menu.
                </p>
                <div className="flex space-x-6">
                  <button
                    onClick={() => setShow(false)}
                    className="bg-[#116D7A]/70 px-5 py-3 text-white rounded-md text-center"
                  >
                    No, Thank You
                  </button>
                  <button
                    onClick={handleToggle}
                    className="bg-white px-8 py-3 text-[#189FB0s] rounded-md text-center"
                  >
                    Okay
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <header className="flex justify-between h-14 font-ebgaramond items-center gap-4 border-b bg-[#189FB0]/70 px-4">
        <div className="">
          <Image
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maya/maya-original-wordmark.svg"
            }
            alt="logo"
            width={35}
            height={35}
            className="shadow-xl"
            priority
          />
        </div>
        <div className="" data-aos="fade-up" data-aos-delay="1000">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              {!open && (
                <ICONS.menu
                  color="white"
                  size={25}
                  onClick={() => setOpen(!open)}
                />
              )}
            </SheetTrigger>
            <SheetContent side={"right"} className={`w-[65%] border-none `}>
              <SheetHeader>
                <SheetClose asChild>
                  <ICONS.close
                    color="white"
                    size={30}
                    className="absolute top-4 right-4 cursor-pointer"
                    onClick={() => setOpen(!open)}
                  />
                </SheetClose>
                <SheetTitle className=""></SheetTitle>
                <SheetDescription className="h-[800px]" asChild>
                  <div
                    className="flex flex-col space-y-5"
                    data-aos="fade-left"
                    data-aos-delay="800"
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
                          className={`relative group flex cursor-pointer mt-8 p-3`}
                        >
                          <div
                            className={`flex flex-row items-center space-x-4 ${
                              active === item.name.toLowerCase()
                                ? "text-[#189FB0]"
                                : "text-white"
                            }`}
                            onClick={() => setOpen(!open)}
                          >
                            <item.icon size={30} />
                            <h4 className="text-lg">{item.name}</h4>
                          </div>
                        </ScrollLink>
                      );
                    })}
                    <div className="flex items-center space-x-5 ml-3">
                      <div className="">
                        {!isChecked ? (
                          <ICONS.musicOff size={30} color="white" />
                        ) : (
                          <ICONS.music size={30} color="white" />
                        )}
                      </div>
                      <Switch
                        checked={isChecked}
                        onCheckedChange={handleToggle}
                      />
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
