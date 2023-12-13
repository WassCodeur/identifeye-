"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Signup() {

  const [web5, setWeb5] = useState<any>(null);
  const [myDid, setMyDid] = useState<any>(null);
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    did: '',
  });


    const initWeb5 = async () => {
      // @ts-ignore
      const { Web5 } = await import('@web5/api');

      try {
        const { web5, did } = await Web5.connect({ sync: '5s' });
        setWeb5(web5);
        setMyDid(did);
    
      } catch (error) {
        alert(error);
      }
    };
  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(formData)
    router.push("/user/dashboard")
  
  };

  const handleChange = (e: any) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async () => {
    
   initWeb5()
  };
  return (

    <form onSubmit={handleSubmit} className="w-[100%] h-[100%] relative bg-black border border-neutral-500" >
      <div className="w-[100%] h-[103px]  top-[160px] absolute text-zinc-100 text-[40px] font-['Fira Code']">Create an IndentifEye Account</div>
      <div className="w-[1312px] h-[673px] left-[64px] top-[271px] absolute justify-space items-center gap-14 inline-flex">
        <div className="flex-col justify-start items-start gap-[30px] inline-flex">
          <div className="h-56 px-6 py-8 rounded-lg shadow border border-green-500 flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch h-40 flex-col justify-center items-start gap-12 flex">

              <input onChange={handleChange} name="name" type="text" className="w-[724px] h-14 pl-4 pr-2.5 py-2.5 rounded-lg border border-neutral-400 justify-start items-center gap-2.5 inline-flex" placeholder="Company Name|" value={formData.name} required></input>
              <input onChange={handleChange} name="did" type="text" className="w-[724px] h-14 pl-4 pr-2.5 py-2.5 rounded-lg border border-neutral-400 justify-start items-center gap-2.5 inline-flex" placeholder="Generate DID|" value={myDid} required></input>


            </div>
          </div>
          <div className="h-[190px] px-6 flex-col justify-start items-start gap-6 flex">
            <div className="justify-start items-start gap-4 inline-flex">
              <div className="rounded-lg justify-start items-start gap-2.5 flex">
                <input type="checkbox" className="w-6 h-6 bg-zinc-300 rounded" />
              </div>
              <div className="w-[684px]"> Policy</div>
            </div>

            <button onClick={handleClick} type="button" className="w-[724px] px-5 py-4 bg-green-500 rounded-lg shadow border-2 border-zinc-100 justify-center items-center gap-2.5 inline-flex text-black text-xl font-['Fira Code']">Generate DID</button>

            <div className="">
              <input type="submit" value="Sign Up" className="signup w-[724px] px-5 py-4 bg-neutral-400 rounded-lg shadow border-2 border-green-500 justify-center items-center gap-2.5 inline-flex text-black text-xl font-['Fira Code']"></input>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex-col justify-space items-center gap-6 inline-flex">

          <Image alt="hero" width={500} height={100} src={"/assets/hero.png"} className="w-[90%]  h-[400px] rounded-[50%]" />
          <div className="w-[390px] text-center">Decentralized Identification Number</div>
        </div>
      </div>
      <div className="left-[64px] top-[32px] absolute justify-space items-center gap-[1000px] inline-flex">
        <h2 className="font-extrabold text-2xl mx-5 md:flex items-center  hidden cursor-pointer ">
          <Link href="/" className="flex items-center justify-center gap-x-4">
            <Image
              src={"/assets/logo.png"}
              alt="IdentifEye Logo"
              width={45}
              height={35}
            />
            <span className="md:block hidden">IdentifEye</span>
          </Link>
        </h2>
        <div className="h-[58px] justify-start items-center gap-4 flex">
          <Link href={"/"} className="text-zinc-100 text-2xl font-medium font-['Fira Code']">Already have an account?</Link>
          <div className="h-[58px] px-5 py-4 bg-neutral-400 rounded-lg shadow border-2 border-green-500 justify-center items-center gap-2.5 flex">
            <Link href={"/"} className="text-black text-xl font-['Fira Code']">Log In</Link>
          </div>
        </div>
      </div>
      <div className="left-[80px] top-[291px] absolute flex-col justify-start items-start gap-2 inline-flex">
        <Link href={"/"} className=" text-white text-xl font-['Fira Code']">Individual</Link>
        <div className="w-[120px] h-[5px] relative">
          <div className="hoverable-link w-[120px] h-[5px] left-0 top-0 absolute bg-neutral-400 rounded-bl rounded-br" />
        </div>
      </div>
      <div className="left-[240px] top-[291px] absolute flex-col justify-start items-start gap-2 inline-flex">
        <Link href={"/"} className="text-white text-xl font-['Fira Code']">Business</Link>
        <div className="w-24 h-[5px] relative">
          <div className="hoverable-link w-24 h-[5px] left-0 top-0 absolute  bg-neutral-400 rounded-bl rounded-br hoverable-link " />
        </div>
      </div>
    </form>
  );
}