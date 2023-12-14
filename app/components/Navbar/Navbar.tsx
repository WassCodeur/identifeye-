"use client";
import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
import {
  FiGitCommit,
  FiGithub,
  FiTwitter,
  FiX,
  FiYoutube,
} from "react-icons/fi";
import Image from "next/image";
import Button from "../Button/Button";
import { usePathname, useRouter } from "next/navigation";

const NavList = [
  {
    href: "/",
    label: "Home",
    id: "home",
  },
  {
    href: "/#services",
    label: "Services",
    id: "services",
  },
  { href: "/about", label: "About Us", id: "about" },
  { href: "/#contact", label: "Contact Us", id: "contact" },
  { href: "/blogs", label: "Blogs", id: "blogs" },
];

const Navbar: React.FC = (): JSX.Element => {
  const mobileLinksRef = useRef<HTMLElement>(null);
  const [navToggled, setNavToggled] = useState<boolean>(false);

  const path = usePathname();
  const router = useRouter();
  let basePath = "";

  try {
    basePath = path.split("/")[1];
    if (basePath === "") {
      basePath = "home";
    }
  } catch (error) {}

  useEffect(() => {
    if (navToggled) {
      mobileLinksRef.current!.style.maxHeight = `${
        mobileLinksRef.current!.scrollHeight
      }px`;
    } else {
      mobileLinksRef.current!.style.maxHeight = "0";
    }
  }, [navToggled]);

  const handleHamburgerClick = () => {
    setNavToggled(!navToggled);
  };

  return (
    <nav className="flex items-center justify-center lg:justify-between md:flex-row flex-col py-5 overflow-x-hidden max-w-screen-xl mx-auto px-5 lg:px-16">
      <h2 className=" mx-5 hidden md:flex items-center cursor-pointer ">
        <Link
          href="/"
          className="flex items-center justify-center gap-x-4"
          onClick={() => setNavToggled(!navToggled)}
        >
          <Image
            src={"/assets/logo.png"}
            alt="IdentifEye Logo"
            width={35}
            height={35}
          />
          <span className=" text-white text-xl md:text-2xl lg:text-[28px] font-semibold">
            IdentifEye
          </span>
        </Link>
      </h2>

      <div className="hidden lg:block">
        <Links
          router={router}
          basePath={basePath}
          navToggled={navToggled}
          setNavToggled={setNavToggled}
        />
      </div>

      <div className="hidden md:flex items-center">
        <Link href={"/auth/login"}>
          <Button className="!text-black px-14 py-1.5">Login</Button>
        </Link>
      </div>

      <div className="md:hidden flex w-full flex-col">
        <div className="header flex w-full items-center justify-between">
          <h2 className="font-extrabold text-secondary text-2xl  mx-5">
            <Link
              href="/"
              className="flex"
              onClick={() => setNavToggled(!navToggled)}
            >
              <Image
                src={"/assets/logo.png"}
                alt="IdentifEye Logo"
                width={35}
                height={35}
              />
            </Link>
          </h2>

          <div
            className={`hamburger mx-5 transform transition-transform duration-300 ease-in-out  `}
            onClick={handleHamburgerClick}
          >
            {navToggled ? (
              <FiX size={24} />
            ) : (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="font-bold"
                height="35"
                width="35"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
              </svg>
            )}
          </div>
        </div>

        <section
          ref={mobileLinksRef}
          className="mx-5 my-2 overflow-hidden transition-max-h duration-500 ease-in-out"
        >
          <div className="lg:hidden">
            <Links
              router={router}
              basePath={basePath}
              navToggled={navToggled}
              setNavToggled={setNavToggled}
            />
          </div>
          <Link
            href="/auth/login"
            className="capitalize block  my-6"
            onClick={() => setNavToggled(!navToggled)}
          >
            <Button>login</Button>
          </Link>
          <Link
            href="/auth/signup"
            className="capitalize block  my-6"
            onClick={() => setNavToggled(!navToggled)}
          >
            <Button>signup</Button>
          </Link>
          <Link
            href="https://github.com/adedoyin-emmanuel/identifeye"
            className="capitalize my-6"
            target="_blank"
            rel="noopenner noreferrer"
            onClick={() => setNavToggled(!navToggled)}
          >
            <Button className="flex items-center gap-x-3 justify-center">
              star project
              <FiGithub className="text-white" />
            </Button>
          </Link>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;

interface props {
  router: any;
  basePath: string;
  navToggled: boolean;
  setNavToggled: any;
}
const Links: FC<props> = ({ router, basePath, navToggled, setNavToggled }) => {
  return (
    <div
      className={
        navToggled
          ? `lg:w-full flex items-center flex-col lg:h-auto lg:flex-row lg:justify-between lg:p-0 z-10 transition duration-700 ease-in-out`
          : "hidden w-full lg:flex items-center justify-center flex-col lg:h-auto lg:flex-row lg:justify-between transition duration-500 ease-in-out"
      }
    >
      <ul className="flex flex-col lg:flex-row lg:ml-10 lg:justify-center lg:items-center gap-3 lg:gap-7 lg:flex-1 text-left lg:text-center w-full lg:px-1 flex-1 py-6 lg:py-0">
        {NavList.map((link, index) => (
          <li
            onClick={() => {
              router.push(link.href);
              setNavToggled(!navToggled);
            }}
            key={index}
            className={
              basePath === link.id
                ? `p-0.5 rounded-2xl lg:border-l-4 lg:border-t-4 lg:border-b-4 lg:border-green-500 hover:lg:border-green-500 lg:border-opacity-50 justify-center items-center inline-flex text-zinc-100 text-base font-medium cursor-pointer`
                : "p-0.5 rounded-2xl lg:border-l-4 lg:border-t-4 lg:border-b-4 lg:border-neutral-400 hover:lg:border-green-500 justify-center items-center inline-flex text-zinc-100 text-base font-medium cursor-pointer"
            }
          >
            {link.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
