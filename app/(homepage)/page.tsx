"use client";

import Link from "next/link";
import Button from "../components/Button/Button";
import Image from "next/image";

const strengths = [
  {
    title: "Globally Recognized",
    desc: "IdentifEye is globally recognized and accepted as a secured form of KYC verification system.",
    image: "/assets/peck1.svg",
  },
  {
    title: "Secure",
    desc: "IdentifEye uses decentralized blockchain technology, enabling a safe and secure environment",
    image: "/assets/peck2.svg",
  },
  {
    title: "User Centered",
    desc: "IdentifEye is globally recognized and accepted as a secured form of KYC verification system.",
    image: "/assets/peck3.svg",
  },
];

export default function Home() {
  return (
    <main className="bg-primary text-white overflow-x-hidden px-5 md:px-14">
      <div className="max-w-screen-xl mx-auto homepage-gradient bg-blend-multiply">
        <section className="py-5 md:py-16 flex min-h-[400px] lg:min-h-[500px] lg:flex  lg:items-stretch lg:flex-row flex-col-reverse max-w-screen-xl mx-auto px-5 md:px-12">
          <div className="lg:w-2/5 flex flex-col justify-center">
            <h1 className="md:text-4xl text-3xl text-zinc-100 text-center lg:text-[64px] font-bold mb-4">
              IdentifEye
            </h1>
            <p className="py-5 text-center text-zinc-100 text-xl font-light">
              Leveraging blockchain technology to provide an All-In-One
              decentralized Identification number
            </p>

            <Link href={"/auth/signup"} className="block mt-10 mx-10">
              <Button className="md:w-10/12 mx-auto bg-white !text-black">
                get started
              </Button>
            </Link>
          </div>

          <div className="flex-1 relative justify-center">
            <Image
              src="/assets/cardano.svg"
              alt="cardano blockchain"
              className="object-contain"
              fill
            />
          </div>
        </section>

        <section
          className="mx-auto py-5 md:py-16 px-5 md:px-12 bg-[#FBC8443D] bg-blend-multiply"
          id="services"
        >
          <h1 className="md:text-4xl text-3xl relative md:left-5 font-bold capitalize mb-7">
            Solution
          </h1>
          <div className="lg:flex items-center mt-7 max-w-screen-lg mx-auto gap-16">
            <div className="lg:w-1/3 flex items-center justify-center">
              <Image
                src="/assets/hero-image-2.png"
                alt="Hero Image 1"
                className=""
                height={500}
                width={500}
              />
            </div>

            <div className="lg:w-2/5 lg:ml-12 mt-8">
              <h2 className="md:text-4xl text-3xl font-medium capitalize">
                DID Identifier
              </h2>
              <p className="py-5 text-lg md:text-xl font-light my-2">
                A single decentralized Identification key for all KYC
                verification for individuals and businesses
              </p>

              <Link href={"/auth/signup"} className="block">
                <Button className="w-fit !text-black">Learn more</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto py-5 md:py-16 px-5 md:px-12">
          <h2 className="md:text-4xl text-3xl  font-bold capitalize mb-4">
            Partners
          </h2>
          <div className="mx-auto flex items-center justify-center w-full my-5 relative aspect-[5/1] max-w-screen-md">
            <Image
              src={"/assets/partners.png"}
              fill
              className=" object-contain"
              alt="IdentifEye Partners"
            />
          </div>
        </section>

        <section className="mx-auto py-5 md:py-16 lg:flex lg:flex-col  lg:items-start px-5 md:px-12">
          <h2 className="md:text-4xl text-3xl  font-bold capitalize mb-4">
            Who stands behind IdentifEye?{" "}
          </h2>
          <div className="w-full my-5 grid grid-cols-2 lg:flex md:items-center md:flex-row flex-col justify-center flex-wrap gap-5 md:gap-12">
            <div className="flex items-center flex-col gap-y-5 p-3 rounded lg:w-full">
              <div className="relative w-full lg:w-60 aspect-square">
                <Image
                  src={"/assets/opemipo.png"}
                  fill
                  alt="Lead Software Engineer"
                  className="bg-[#F4F4F4] rounded-full object-contain"
                />
              </div>

              <p className="capitalize text-center text-sm">
                CEO / Lead Designer
              </p>
            </div>
            <div className="flex items-center flex-col gap-y-5 p-3 rounded">
              <div className="relative w-full lg:w-60 aspect-square">
                <Image
                  src={"/assets/toriola.png"}
                  fill
                  alt="Lead Software Engineer"
                  className="bg-[#F4F4F4] rounded-full object-contain"
                />
              </div>

              <p className="capitalize text-center text-sm">
                Managing Partner / Designer
              </p>
            </div>

            <div className="flex items-center flex-col gap-y-5 p-3 rounded">
              <div className=" relative w-full lg:w-60 aspect-square">
                <Image
                  src={"/assets/wasscoder.png"}
                  fill
                  alt="Lead Software Engineer"
                  className="bg-[#F4F4F4] rounded-full object-contain"
                />
              </div>

              <p className="capitalize text-center text-sm">VP - Tech</p>
            </div>

            <div className="flex items-center flex-col gap-y-5 p-3 rounded">
              <div className=" relative w-full lg:w-60 aspect-square">
                <Image
                  src={"/assets/emmysoft.png"}
                  fill
                  alt="Lead Software Engineer"
                  className="bg-[#F4F4F4] rounded-full object-contain"
                />
              </div>

              <p className="capitalize text-center text-sm">
                Lead Software Developer
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto py-5 md:py-16 px-5 md:px-12">
          <h2 className="md:text-4xl text-3xl  font-bold capitalize mb-4">
            What makes us trusted{" "}
          </h2>

          <div className="flex flex-col-reverse lg:flex-row items-center gap-3 mt-5">
            <div
              className=" rounded-l-[20px] p-4 lg:w-[300px]"
              style={{
                background:
                  "linear-gradient(0deg, #396813, #396813),conic-gradient(from 153.43deg at 0% 0%, rgba(230, 251, 4, 0) -69.21deg, #E6FB04 274.02deg, rgba(230, 251, 4, 0) 290.79deg, #E6FB04 634.02deg)",
              }}
            >
              <div className="relative h-36 aspect-square mx-auto">
                <Image src={strengths[0].image} alt={strengths[0].title} fill />
              </div>
              <h3 className=" text-2xl font-bold my-4">{strengths[0].title}</h3>
              <p className="font-light">{strengths[0].desc}</p>
            </div>
            <div className="flex flex-col gap-4 md:gap-8">
              <div
                className=" rounded-[40px] rounded-bl-none p-4 lg:w-[300px]"
                style={{
                  background:
                    "linear-gradient(196.63deg, #00FF66 11.5%, rgba(0, 255, 102, 0) 72.24%),linear-gradient(0deg, #3D6C13, #3D6C13)",
                }}
              >
                <div className="relative h-36 aspect-square mx-auto">
                  <Image
                    src={strengths[1].image}
                    alt={strengths[1].title}
                    fill
                  />
                </div>
                <h3 className=" text-2xl font-bold my-4">
                  {strengths[1].title}
                </h3>
                <p className="font-light">{strengths[1].desc}</p>
              </div>
              <div
                className=" rounded-[40px] rounded-tl-none p-4 lg:w-[300px]"
                style={{
                  background:
                    "conic-gradient(from -36.14deg at 34.95% 53.86%, rgba(0, 5, 3, 0) 0deg, rgba(0, 5, 3, 0.990338) 83.58deg, #000503 115.13deg, rgba(0, 5, 3, 0) 360deg),linear-gradient(0deg, #3E6D13, #3E6D13)",
                }}
              >
                <div className="relative h-36 aspect-square mx-auto">
                  <Image
                    src={strengths[2].image}
                    alt={strengths[2].title}
                    fill
                  />
                </div>
                <h3 className=" text-2xl font-bold my-4">
                  {strengths[2].title}
                </h3>
                <p className="font-light">{strengths[2].desc}</p>
              </div>
            </div>
            <div className=" lg:w-[470px] lg:ml-10">
              <p className=" text-xl md:text-2xl font-light">
                We provide our users an identification system that is based on a
                decentralized blockchain technology, enabling users to have
                control over their KYC documents through a central Identifier
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto py-5 px-5 md:px-12">
          <button
            className="text-yellow-400 text-base"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            Return to Top
          </button>
        </div>
      </div>
    </main>
  );
}
