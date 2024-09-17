"use client";
import { ICONS } from "@/utils/icons";
import Image from "next/image";
import React, { useState } from "react";
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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleSetActive = (to: string) => {
    setActive(to);
  };

  return (
    <div>
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
