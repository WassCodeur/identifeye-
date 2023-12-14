"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import Button from "../components/Button/Button";
import { usePathname } from "next/navigation";

const AuthNav = () => {
  const pathname = usePathname().split("/")[2];

  return (
    <nav className="flex items-center justify-between pt-7 md:py-7 overflow-x-hidden max-w-screen-xl mx-auto px-5">
      <h2 className=" mx-5  md:flex md:items-center items-start cursor-pointer ">
        <Link href="/" className="flex items-center justify-center gap-x-4">
          <Image
            src={"/assets/logo.png"}
            alt="IdentifEye Logo"
            width={35}
            height={35}
          />
          <span className="hidden md:block text-white text-xl md:text-2xl lg:text-[28px] font-semibold">
            IdentifEye
          </span>
        </Link>
      </h2>
      <div className="justify-end items-center gap-4 md:gap-7 flex ">
        <p className="text-zinc-100 text-xs sm:text-sm md:text-lg lg:text-2xl font-medium">
          {pathname === "signup"
            ? "Already have an account?"
            : "Dont have an account?"}
        </p>
        {pathname === "signup" ? (
          <Link href="/auth/login" className="capitalize block my-6">
            <Button className="px-10">login</Button>
          </Link>
        ) : (
          <Link href="/auth/signup" className="capitalize block my-6">
            <Button className="px-10">Sign Up</Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default AuthNav;
