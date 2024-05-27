"use client";
import Image from "next/image";
import React, { useState } from "react";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <Image
        src="/menu.png"
        className="cursor-pointer"
        alt=""
        width={20}
        height={20}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-4 text-xl z-10">
          {/* <div className=" ">
            <Image
              src="/x.png"
              alt=""
              width={20}
              height={20}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div> */}

          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/deals">Deals</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/logout">Logout</a>
          <a href="/cart">Cart(1)</a>
        </div>
      )}
    </div>
  );
};
