import Navbar from "./components/Navbar/Navbar";
import Link from "next/link";
import Button from "./components/Button/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[1440px] h-[4113px] relative bg-black border border-neutral-400">
      <div className="w-[1312px] h-[600px] left-[64px] top-[887px] absolute bg-amber-300 bg-opacity-25" />
      <div className="w-[947px] left-[64px] top-[32px] absolute justify-start items-center gap-20 inline-flex">
        <div className="justify-center items-center gap-4 flex">
          <div className="w-20 h-20 px-2.5 pt-3.5 pb-[13px] border border-black justify-center items-center flex">
            <div className="w-[60px] h-[53px] relative">
              <div className="w-4 h-[33.45px] left-[22.13px] top-[16.91px] absolute text-green-500 text-[25.60px] font-['Fira Code']">i</div>
            </div>
          </div>
          <div className="w-[168px] h-12 text-white text-[28px] font-semibold font-['Fira Code']">IdentifEye</div>
        </div>
        <div className="h-[37px] justify-start items-start gap-10 flex">
          <div className="p-2 rounded-2xl border-l-4 border-t-4 border-b-4 border-green-500 border-opacity-50 justify-center items-center flex">
            <div className="text-zinc-100 text-base font-medium font-['Fira Code']">Home</div>
          </div>
          <div className="p-2 rounded-2xl border-l-4 border-t-4 border-b-4 border-neutral-400 justify-center items-center flex">
            <div className="text-zinc-100 text-base font-medium font-['Fira Code']">Services</div>
          </div>
          <div className="p-2 rounded-2xl border-l-4 border-t-4 border-b-4 border-neutral-400 justify-center items-center flex">
            <div className="text-zinc-100 text-base font-medium font-['Fira Code']">About Us</div>
          </div>
          <div className="p-2 rounded-2xl border-l-4 border-t-4 border-b-4 border-neutral-400 justify-center items-center flex">
            <div className="text-zinc-100 text-base font-medium font-['Fira Code']">Contact Us</div>
          </div>
          <div className="p-2 rounded-2xl border-l-4 border-t-4 border-b-4 border-neutral-400 justify-center items-center flex">
            <div className="text-zinc-100 text-base font-medium font-['Fira Code']">Blogs</div>
          </div>
        </div>
      </div>
      <div className="w-[1312px] h-[3980px] left-[64px] top-[117px] absolute bg-yellow-400 bg-opacity-20 rounded-lg" />
      <div className="left-[134px] top-[921px] absolute text-zinc-100 text-[40px] font-semibold font-['Fira Code']">Solution</div>
      <div className="left-[134px] top-[1604px] absolute text-zinc-100 text-[40px] font-semibold font-['Fira Code']">Partners</div>
      <div className="w-[410px] h-[108px] left-[134px] top-[1920px] absolute text-zinc-100 text-[40px] font-semibold font-['Fira Code']">Who stands behind IdentifEye?</div>
      <div className="w-[410px] h-[108px] left-[134px] top-[2833px] absolute text-zinc-100 text-[40px] font-semibold font-['Fira Code']">What makes us trusted</div>
      <div className="left-[134px] top-[353px] absolute flex-col justify-start items-start gap-1 inline-flex">
        <div className="text-zinc-100 text-[64px] font-bold font-['Fira Code']">IdentifEye</div>
        <div className="w-96 text-center text-zinc-100 text-xl font-light font-['Fira Code']">Leveraging blockchain technology to provide an All-In-One decentralized Identification number </div>
      </div>
      <img className="w-[800px] h-[448px] left-[570px] top-[237px] absolute" src="https://via.placeholder.com/800x448" />
      <div className="w-[920px] left-[134px] top-[1015px] absolute justify-center items-center gap-[72px] inline-flex">
        <img className="w-[342px] h-[332px]" src="https://via.placeholder.com/342x332" />
        <div className="flex-col justify-start items-start inline-flex">
          <div className="px-2 flex-col justify-center items-start flex">
            <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-zinc-100 text-[40px] font-medium font-['Fira Code']">DID Identifier</div>
            </div>
            <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
              <div className="w-96 text-zinc-100 text-xl font-light font-['Fira Code']">A single decentralized Identification key for all KYC verification for individuals and businesses</div>
            </div>
          </div>
          <div className="px-6 py-2.5 flex-col justify-start items-start gap-2.5 flex">
            <div className="w-[140px] h-12 px-5 py-4 bg-neutral-400 rounded-lg shadow border-2 border-green-500 justify-center items-center gap-2.5 inline-flex">
              <div className="text-black text-xl font-['Fira Code']">Learn More</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[322px] px-5 py-4 left-[169px] top-[577px] absolute bg-zinc-100 rounded-lg shadow border-2 border-green-500 justify-center items-center gap-2.5 inline-flex">
        <div className="text-black text-xl font-['Fira Code']">Get Started</div>
      </div>
      <div className="w-40 h-8 px-5 py-4 left-[1210px] top-[58px] absolute bg-neutral-400 rounded-lg shadow border-2 border-green-500 justify-center items-center gap-2.5 inline-flex">
        <div className="text-black text-xl font-['Fira Code']">Log In</div>
      </div>
      <div className="w-[739px] left-[351px] top-[1672px] absolute justify-start items-start gap-10 inline-flex">
        <img className="w-40 h-[72px]" src="https://via.placeholder.com/160x72" />
        <img className="w-[273px] h-[72px]" src="https://via.placeholder.com/273x72" />
        <img className="w-[225px] h-[72px]" src="https://via.placeholder.com/225x72" />
      </div>
      <div className="w-[1205px] left-[171px] top-[3005px] absolute justify-start items-center gap-10 inline-flex">
        <div className="justify-start items-center flex">
          <div className="justify-start items-start gap-2.5 flex">
            <div className="w-[307px] h-[350px] flex-col justify-center items-center gap-1 inline-flex">
              <img className="w-[153px] h-[153px] rounded-[313px]" src="https://via.placeholder.com/153x153" />
              <div className="h-[186px] flex-col justify-start items-start flex">
                <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
                  <div className="w-[202px] text-zinc-100 text-2xl font-bold font-['Fira Code']">Globally Recognized</div>
                </div>
                <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
                  <div className="w-[257px] text-zinc-100 text-base font-light font-['Fira Code']">IdentifEye is globally recognized and accepted as a secured form of KYC verification system.</div>
                </div>
              </div>
            </div>
            <div className="w-[299px] h-[350px] bg-yellow-400 rounded-tl-[40px] rounded-bl-[40px] border-l-2 border-t-2 border-b-2 border-lime-800" />
          </div>
          <div className="flex-col justify-start items-center gap-[30px] inline-flex">
            <div className="rounded-tl-[40px] rounded-tr-[40px] rounded-br-[40px] justify-center items-center gap-2.5 inline-flex">
              <div className="w-[299px] h-[350px] bg-gradient-to-b from-green-500 to-green-500 rounded-tl-[40px] rounded-tr-[40px] rounded-br-[40px] border-r-2 border-t-2 border-b-2 border-lime-800" />
              <div className="w-[299px] h-[350px] rounded-[40px] flex-col justify-start items-center gap-1 inline-flex">
                <img className="w-[153px] h-[153px] rounded-[313px]" src="https://via.placeholder.com/153x153" />
                <div className="flex-col justify-start items-start flex">
                  <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-zinc-100 text-2xl font-bold font-['Fira Code']">Secure</div>
                  </div>
                  <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
                    <div className="w-[257px] text-zinc-100 text-base font-light font-['Fira Code']">IdentifEye uses decentralized blockchain technology, enabling a safe and secure environment</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-2.5 inline-flex">
              <div className="p-2.5 justify-start items-start gap-2.5 flex">
                <div className="w-[299px] h-[350px] bg-black rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px] border-r-2 border-t-2 border-b-2 border-lime-800" />
              </div>
              <div className="w-[299px] h-[350px] flex-col justify-start items-center gap-1 inline-flex">
                <img className="w-[157px] h-[153px] rounded-[313px]" src="https://via.placeholder.com/157x153" />
                <div className="flex-col justify-start items-start flex">
                  <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-center text-zinc-100 text-2xl font-bold font-['Fira Code']">User Centered</div>
                  </div>
                  <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
                    <div className="w-[257px] text-zinc-100 text-base font-light font-['Fira Code']">IdentifEye is globally recognized and accepted as a secured form of KYC verification system.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[478px] h-[266px] text-zinc-100 text-2xl font-light font-['Fira Code']">We provide our users an identification system that is based on a decentralized blockchain technology, enabling users to have control over their KYC documents through a central Identifier </div>
      </div>
      <div className="left-[64px] top-[2092px] absolute flex-col justify-center items-center gap-4 inline-flex">
        <div className="flex-col justify-center items-center gap-2 flex">
          <div className="flex-col justify-start items-start gap-2.5 flex">
            <div className="w-[245px] h-[245px] bg-zinc-300 rounded-full shadow" />
            <img className="w-[245px] h-[245px] rounded-[123px]" src="https://via.placeholder.com/245x245" />
          </div>
          <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-zinc-100 text-base font-medium font-['Fira Code']">CEO / Lead Designer</div>
          </div>
        </div>
        <div className="w-[1312px] justify-center items-center gap-16 inline-flex">
          <div className="w-[260px] flex-col justify-start items-center gap-2 inline-flex">
            <div className="h-[265px] flex-col justify-center items-center flex">
              <div className="p-2.5 flex-col justify-start items-start gap-2.5 flex">
                <div className="p-2.5 flex-col justify-start items-start gap-2.5 flex">
                  <img className="w-[245px] h-[243.02px] rounded-[123px]" src="https://via.placeholder.com/245x243" />
                </div>
                <div className="w-[245px] h-[245px] bg-zinc-300 rounded-full shadow" />
              </div>
            </div>
            <div className="self-stretch p-2.5 justify-center items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 text-center text-zinc-100 text-base font-medium font-['Fira Code']">Managing Partner /  Designer</div>
            </div>
          </div>
          <div className="w-[260px] flex-col justify-center items-center gap-2 inline-flex">
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <div className="w-[245px] h-[245px] bg-zinc-300 rounded-full shadow" />
              <img className="w-[245px] h-[245px] rounded-[123px]" src="https://via.placeholder.com/245x245" />
            </div>
            <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-zinc-100 text-base font-medium font-['Fira Code']">VP - Tech</div>
            </div>
          </div>
          <div className="w-[260px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <div className="w-[245px] h-[245px] bg-zinc-300 rounded-full shadow" />
              <img className="w-[177px] h-[225px] rounded-[200px]" src="https://via.placeholder.com/177x225" />
            </div>
            <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-zinc-100 text-base font-medium font-['Fira Code']">Lead Software Developer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="left-[64px] top-[3895px] absolute flex-col justify-center items-start gap-4 inline-flex">
        <div className="w-[1312px] h-[0px] border-4 border-yellow-400"></div>
        <div className="w-[969px] justify-between items-end inline-flex">
          <div className="flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-[126px] h-[39px] text-zinc-100 text-2xl font-semibold font-['Fira Code']">About us</div>
            <div className="w-[199px] h-[113px] text-zinc-100 text-xs font-normal font-['Fira Code']">We are a leading provider of a blockchain technology solution that provides a decentralized Identification system for Individuals and Businesses in Africa</div>
          </div>
          <div className="flex-col justify-center items-start gap-2 inline-flex">
            <div className="w-[129px] h-6 text-zinc-100 text-base font-semibold font-['Fira Code']">Services</div>
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="flex-col justify-start items-start gap-[3px] flex">
                <div className="w-[91px] h-[15px] text-zinc-100 text-xs font-light font-['Fira Code']">For Business</div>
                <div className="w-[91px] h-2 relative">
                  <div className="w-[91px] h-2 left-0 top-0 absolute bg-yellow-400 rounded-bl rounded-br" />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-[3px] flex">
                <div className="w-[109px] h-[15px] text-zinc-100 text-xs font-light font-['Fira Code']">For Individuals</div>
                <div className="w-[109px] h-2 relative">
                  <div className="w-[109px] h-2 left-0 top-0 absolute bg-yellow-400 rounded-bl rounded-br" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[108px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="pr-2.5 justify-center items-center gap-2.5 inline-flex">
              <div className="text-zinc-100 text-base font-semibold font-['Fira Code']">Contact Us</div>
            </div>
            <div className="w-[188px] flex-col justify-start items-start gap-6 flex">
              <div className="w-[188px] justify-center items-start gap-4 inline-flex">
                <div className="w-6 h-6 relative" />
                <div className="w-6 h-6 relative">
                  <div className="w-6 h-6 left-0 top-0 absolute">
                  </div>
                </div>
                <div className="w-6 h-6 relative">
                  <div className="w-6 h-6 left-0 top-0 absolute">
                  </div>
                </div>
                <div className="w-6 h-6 relative" />
              </div>
              <div className="justify-start items-center gap-1 inline-flex">
                <div className="w-6 h-6 relative" />
                <div className="pr-2.5 py-2.5 justify-center items-center gap-2.5 flex">
                  <div className="text-zinc-100 text-xs font-light font-['Fira Code']">+2349060308987</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="left-[134px] top-[3843px] absolute justify-center items-center gap-2.5 inline-flex">
        <div className="text-yellow-400 text-base font-['Fira Code']">Return to Top</div>
      </div>
    </div>
  );
}
