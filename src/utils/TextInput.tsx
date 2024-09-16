"use client";
import React, { useState } from "react";

type TextInputProps = {
  label?: string;
  register?: any;
  name?: string;
  type?: string;
  errors?: any;
  placeholder?: string;
  className?: string;
};

const TextInput = ({
  label,
  register,
  name,
  type = "text",
  errors,
  placeholder = "",
  className,
}: TextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type?.toLowerCase().includes("password");
  const inputType = isPasswordField && showPassword ? "text" : type;

  const baseClass = `appearance-none block w-full pr-10 p-3 shadow-sm md:text-xl text-sm font-medium text-black rounded-md
   placeholder:font-Urbanist placeholder:font-semibold placeholder:text-xs md:placeholder:text-base 
   placeholder:text-gray-400 outline-none focus:outline-none sm:text-sm ${className}`;

  return (
    <div className="">
      {label && (
        <label
          htmlFor={name}
          className="block md:text-lg text-sm font-medium leading-6 text-white"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {register && (
          <>
            {type === "textarea" ? (
              <textarea
                {...register(`${name}`, { required: true })}
                id={name}
                placeholder={placeholder}
                className={baseClass}
              />
            ) : (
              <input
                {...register(`${name}`, { required: true })}
                id={name}
                name={name}
                type={inputType}
                placeholder={placeholder}
                autoComplete={name}
                className={baseClass}
              />
            )}
          </>
        )}
      </div>
      {errors && name !== undefined && errors[name] && (
        <span
          style={{
            color: "#CC0000",
          }}
          className=" text-base font-ebgaramond text-red-500"
        >
          {label} field is required
        </span>
      )}
    </div>
  );
};

export default TextInput;
