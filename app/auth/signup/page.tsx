"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/app/components/Button/Button";

export default function Signup() {
  const [web5, setWeb5] = useState<any>(null);
  const [myDid, setMyDid] = useState<any>(null);

  const [active, setActive] = useState(1);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    did: "",
  });

  const initWeb5 = async () => {
    // @ts-ignore
    const { Web5 } = await import("@web5/api");

    try {
      const { web5, did } = await Web5.connect({ sync: "5s" });
      setWeb5(web5);
      setMyDid(did);
    } catch (error) {
      alert(error);
    }
  };
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

  const handleClick = async () => {
    initWeb5();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black max-w-screen-xl mx-auto px-5 lg:px-14 py-7 md:py-10"
    >
      <div className="flex items-center lg:items-stretch gap-16 md:gap-20 flex-col lg:flex-row">
        <div>
          <h2 className="text-zinc-100 text-2xl leading-normal md:text-4xl font-normal md:leading-normal">
            Create an IndentifEye Account
          </h2>

          <div className="flex items-center gap-5 mt-7 md:mt-12">
            <div
              onClick={() => setActive(1)}
              className={`border-b-4 rounded-b-md text-white text-xl cursor-pointer ${
                active === 1 ? "border-[#FBFB00]" : "border-[#B0ADAD]"
              }`}
            >
              Individual
            </div>
            <div
              onClick={() => setActive(2)}
              className={`border-b-4 rounded-b-md text-white text-xl cursor-pointer ${
                active === 2 ? "border-[#FBFB00]" : "border-[#B0ADAD]"
              }`}
            >
              Business
            </div>
          </div>

          <div
            className="px-6 py-8 my-9 rounded-lg shadow border border-green-500 flex-col justify-start items-start gap-6 flex"
            style={{
              boxShadow: "6px 6px 6px 0px #00FF66",
            }}
          >
            {active === 2 && (
              <input
                onChange={handleChange}
                name="name"
                type="text"
                className="w-full h-14 pl-4 pr-2.5 py-2.5 rounded-lg border border-[#B0ADAD] text-white bg-transparent justify-start items-center gap-2.5 inline-flex"
                placeholder="Company Name"
                value={formData.name}
                required
              />
            )}
            <input
              onChange={handleChange}
              name="did"
              type="text"
              className="w-full h-14 pl-4 pr-2.5 py-2.5 rounded-lg border border-[#B0ADAD] text-white bg-transparent justify-start items-center gap-2.5 inline-flex"
              placeholder="Generate DID"
              value={myDid}
              required
            />
          </div>
          <div className="h-[190px] px-6 flex-col justify-start items-start gap-6 flex">
            <div className="justify-start items-start gap-4 inline-flex">
              <div className="rounded-lg justify-start items-start gap-2.5 flex">
                <input
                  type="checkbox"
                  value=""
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
              onClick={handleClick}
              type="button"
              className="w-[724px] px-5 py-4 bg-green-500 rounded-lg shadow border-2 !border-zinc-100 justify-center items-center gap-2.5 inline-flex !text-black text-xl"
            >
              Generate DID
            </Button>

            <Button
              type="submit"
              className="signup w-[724px] px-5 py-4 bg-neutral-400 rounded-lg shadow border-2 border-green-500 justify-center items-center gap-2.5 inline-flex !text-black text-xl"
            >
              Sign Up
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
          <p className="text-center font-bold text-2xl md:text-3xl max-w-xs mx-auto md:leading-normal">
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
}
