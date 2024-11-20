"use client";
import TextInput from "@/utils/TextInput";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { bannerIcon, contact } from "../Sidebar/data";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { LoaderCircle } from "lucide-react";

export interface ContactProp {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  subject: string;
}
const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactProp>();

  const onSubmit = (data: ContactProp) => {
    setLoading(true);
    try {
      const templateParams = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        message: data.message,
        subject: data.subject,
      };
      emailjs
        .send(
          "service_jlpkyyb",
          "template_71hr7ku",
          templateParams,
          "0RwIucuJJihXwNViI"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success(
              "Your Message has been sent to Mayadihno. Thank You!!!"
            );
            setLoading(false);
            reset();
          },
          (error) => {
            console.log(error.text);
            toast.error(
              "Error occur when sending your message. Kindly try again later."
            );
            setLoading(false);
          }
        );
    } catch (error) {
      toast.error("Something went wrong. Try again later");
      setLoading(false);
    }
  };
  return (
    <div className="bg-[#189FB0] w-full h-fit pt-10 pb-10 mt-5">
      <div className="md:w-[85%] w-[95%] mx-auto">
        <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-white md:text-6xl text-3xl font-bold pb-5 font-ebgaramond"
        >
          Contact
        </h3>
        <div className="flex md:flex-row flex-col-reverse md:space-x-10">
          <div
            className="md:w-1/2 w-full md:mt-0 my-5"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="font-ebgaramond">
              <div className="flex space-x-5">
                <div className="w-full">
                  <TextInput
                    label="First Name"
                    register={register}
                    errors={errors}
                    placeholder="John"
                    name="firstName"
                  />
                </div>
                <div className="w-full">
                  <TextInput
                    label="Last Name"
                    register={register}
                    errors={errors}
                    placeholder="Doe"
                    name="lastName"
                  />
                </div>
              </div>
              <div className="flex space-x-5 py-5">
                <div className=" w-full">
                  <TextInput
                    label="Email Address"
                    register={register}
                    errors={errors}
                    placeholder="JohnDoe@gmail.com"
                    name="email"
                    type="email"
                    className="w-full"
                  />
                </div>
                <div className=" w-full">
                  <TextInput
                    label="Phone Number"
                    register={register}
                    errors={errors}
                    placeholder="0123456789"
                    name="phoneNumber"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="pb-5">
                <TextInput
                  label="Subject"
                  register={register}
                  errors={errors}
                  placeholder="Subject"
                  name="subject"
                  className="w-full"
                />
              </div>
              <div className="">
                <TextInput
                  label="Message"
                  register={register}
                  errors={errors}
                  placeholder="Message"
                  name="message"
                  className="w-full h-[200px]"
                  type="textarea"
                />
              </div>
              <div className="mt-5">
                <button className="bg-white w-full text-lg font-semibold text-center text-[#189FB0] hover:text-white px-5 py-3 rounded-md hover:bg-[#42CBD7]/100">
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <LoaderCircle className="mr-2 animate-spin" />
                      Sending message...
                    </span>
                  ) : (
                    " Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
          <div
            className="md:w-1/2 w-full font-ebgaramond"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <h3 className="text-white text-3xl font-bold md:pt-5 py-3 md:pb-5">
              Get In Touch
            </h3>
            <div className=" text-lg text-white font-medium leading-10">
              <p className="py-3">
                I am a web developer who is dedicated to providing high-quality,
                user-friendly websites and web applications. I am committed to
                ensuring that you are completely satisfied with your project.
              </p>
              <p>
                I will personally review your message within 24 hours and
                provide you with a tailored solution that meets your specific
                requirements. Thank you for your trust!
              </p>
            </div>
            <div className="flex flex-col space-y-4 mt-8">
              {contact.map((item) => {
                return (
                  <div className="flex space-x-2" key={item.id}>
                    <item.icon color="white" size={30} />
                    <span className="text-lg text-white font-medium">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center space-x-5 my-5">
              {bannerIcon.map((item) => {
                return (
                  <div
                    className=""
                    key={item.id}
                    data-aos="fade-up-right"
                    data-aos-duration="1000"
                  >
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <item.icon size={25} color="white" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
