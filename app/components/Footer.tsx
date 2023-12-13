import Link from "next/link";
import React from "react";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
    const navItemsClassname =
        "h-6 w-6 text-accent transition-color hover:text-secondary";

    const socials = [
        {
            link: "https://github.com/adedoyin-emmanuel/identifeye",
            element: <FiFacebook className={navItemsClassname} />,
        },

        {
            link: "https://youtube.com/@adedoyin-emmanuel/",
            element: <FiInstagram className={navItemsClassname} />,
        },
        {
            link: "https://github.com/Emmysoft_Tm/",
            element: <FiLinkedin className={navItemsClassname} />,
        },
    ];

    return (
        <footer
            id="contact"
            className="mx-auto max-w-screen-xl py-5 md:py-9"
            style={{
                backgroundImage:
                    "conic-gradient(from 109.98deg at 0% 44.8%, rgba(1, 249, 100, 0) -88.13deg, #00FF66 143.88deg, rgba(1, 249, 100, 0) 271.87deg, #00FF66 503.88deg),radial-gradient(80.36% 77.63% at 96.84% 22.37%, rgba(209, 242, 6, 0.2) 2.21%, rgba(209, 242, 6, 0.2) 19.04%, rgba(66, 104, 18, 0) 46.5%)",
                backgroundPosition: "bottom",
            }}
        >
            <div className="w-full border-b-4 border-[#FBFB00]"></div>

            <div className="mt-7 md:mt-10 flex flex-col lg:flex-row gap-4 px-5 md:px-12 lg:gap-10 lg:justify-between items-start">
                <div className=" lg:max-w-[200px]">
                    <h3 className="text-xl md:text-2xl font-semibold">About us</h3>
                    <p className="text-xs mt-2.5">
                        We are a leading provider of a blockchain technology solution that
                        provides a decentralized Identification system for Individuals and
                        Businesses in Africa
                    </p>
                </div>

                <div className=" lg:max-w-[200px]">
                    <h3 className="text-base md:text-lg font-semibold">Services</h3>
                    <p className="text-xs mt-2.5 border-b-8 border-[#FBFB00] rounded-b-md lg:block">
                        For Business
                    </p>
                    <p className="text-xs mt-2.5 border-b-8 border-[#FBFB00] rounded-b-md ml-8 lg:ml-0 lg:block">
                        For Individuals
                    </p>
                </div>

                <div className=" lg:max-w-[200px]">
                    <h3 className="text-base md:text-lg font-semibold">Contact Us</h3>
                    <div className="flex items-center gap-4 my-4">
                        {socials.map((social, i) => (
                            <Link
                                href={social.link}
                                key={i}
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                {social.element}
                            </Link>
                        ))}
                    </div>
                    <Link href="tel:+2349060308987" className="text-xs font-light">
                        +2349060308987
                    </Link>
                </div>

                <div></div>
            </div>
        </footer>
    );
};

export default Footer;