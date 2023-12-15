"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Text from "@/app/components/Text/Text";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    did: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    router.push("/user/dashboard");
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black max-w-screen-xl mx-auto px-5 lg:px-14 py-7 md:py-10"
    >
      <div className="flex items-center lg:items-stretch gap-7 md:gap-20 flex-col lg:flex-row">
        <div className="flex items-stretch justify-center flex-col">
          <h2 className="text-zinc-100 text-xl md:text-2xl text-center font-semibold md:leading-normal">
            Log In with your DID
          </h2>

          <div
            className="px-6 py-8 my-9 rounded-lg shadow border border-green-500 flex-col justify-start items-start gap-6 flex"
            style={{
              boxShadow: "6px 6px 6px 0px #00FF66",
            }}
          >
            <input
              name="did"
              type="text"
              className="w-full h-14 pl-4 pr-2.5 py-2.5 rounded-lg border border-[#B0ADAD] text-white bg-transparent justify-start items-center gap-2.5 inline-flex"
              placeholder="Input your DID"
              value=""
              onChange={handleChange}
              required
            />
          </div>
          <div className="h-[190px] px-6 flex-col justify-start items-start gap-6 flex">
            <div className="justify-start items-start gap-4 inline-flex">
              <div className="rounded-lg justify-start items-start gap-2.5 flex">
                <input
                  type="checkbox"
                  className="w-6 h-6 bg-zinc-300 rounded"
                />
              </div>
              <div className="">
                I agree to the{" "}
                <Link href="/" className="text-[#00FF66]">
                  Privacy Policy and Terms and conditions.
                </Link>
              </div>
            </div>

            <Button
              type="submit"
              className="signup w-[724px] px-5 py-4 bg-neutral-400 rounded-lg shadow border-2 border-green-500 justify-center items-center gap-2.5 inline-flex !text-black text-xl"
            >
              Log In{" "}
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-2/5">
          <div className="relative w-full aspect-square">
            <Image
              alt="hero"
              fill
              src={"/assets/devices.svg"}
              className=" object-contain"
            />
          </div>
          <p className="text-center font-bold text-2xl md:text-3xl max-w-xs mx-auto md:leading-normal mt-4">
            Your{" "}
            <span className="text-3xl md:text-4xl text-[#00FF66] md:leading-normal">
              All-in-One
            </span>{" "}
            Decentralized Identification Number{" "}
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
