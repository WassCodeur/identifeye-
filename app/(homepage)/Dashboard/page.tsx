import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
    return (
        <div className="w-[100%] h-[100%] relative bg-black border border-neutral-500">
            <div className="w-[100%] h-[833px] left-[0] top-[190px] absolute rounded-lg  border-green-500">
                <div className="px-4 py-3 left-[64px] top-[114px] absolute justify-center items-center gap-2.5 inline-flex">
                    <Link href={""} className="text-zinc-100 text-xl font-semibold font-['Fira Code']">Submit Credential</Link>
                </div>
                <div className="px-4 py-3 left-[64px] top-[32px] absolute bg-green-500 rounded-lg border-l-8 border-zinc-100 justify-center items-center gap-2.5 inline-flex">
                    <div className="w-[204px] text-black text-xl font-semibold font-['Fira Code']">Dashboard</div>
                </div>
                <div className="px-4 py-3 left-[64px] top-[196px] absolute justify-center items-center gap-2.5 inline-flex">
                    <Link href={""} className="text-zinc-100 text-xl font-semibold font-['Fira Code']">Verify Credential</Link>
                </div>
                <div className="px-4 py-3 left-[64px] top-[640px] absolute bg-green-500 rounded-lg border-l-8 border-zinc-100 justify-center items-center gap-2.5 inline-flex">
                    <Link href={""} className="w-[204px] text-black text-xl font-semibold font-['Fira Code']">Settings</Link >
                </div>
            </div>
            <div className="w-[322px] px-5 py-4 left-[944px] top-[751px] absolute bg-neutral-400 rounded-lg shadow border-2 border-green-500 justify-center items-center gap-2.5 inline-flex">
                <Link href={""} className="text-black text-xl font-['Fira Code']">Quick Guild</Link >
            </div>
            <div className="left-[64px] top-[34px] absolute justify-start items-center gap-[450px] inline-flex">
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
                <div className="pr-[190px] rounded-lg border border-green-500 justify-start items-center gap-4 flex">
                    <div className="self-stretch px-4 py-[13.50px] bg-neutral-700 rounded-lg justify-start items-start gap-4 inline-flex">
                        <input type="button" value="Search" className="text-white text-xl font-['Fira Code']"></input>
                    </div>
                    <input type="text" placeholder="Type anything" className="bg-black text-neutral-400 text-xl font-['Fira Code']"></input>
                </div>
                <div className="w-[100%] justify-center items-start gap-12 flex">
                    <div className=" h-[80px] grow shrink basis-0 self-stretch px-2 pt-[7px] pb-1.5 bg-neutral-400 rounded-[50%] justify-center items-center inline-flex">
                        <div className="text-black text-4xl font-semibold font-['Fira Code']">3</div>
                    </div>
                    <div className="h-[80px] grow shrink basis-0 self-stretch px-2 pt-[7px] pb-1.5 bg-neutral-400 rounded-[50%] justify-center items-center inline-flex">
                        <div className="text-black text-4xl font-semibold font-['Fira Code']">TA</div>
                    </div>
                </div>
            </div>
            <div className="left-[392px] top-[210px] absolute flex-col justify-start items-start gap-[13px] inline-flex">
                <div className="text-white text-4xl font-semibold font-['Fira Code']">Overview</div>
                <div className="w-[693px] text-white text-xl font-['Fira Code']">Welcome, would like to submit more credential to your DID or Verify DID</div>
            </div>
            <div className="h-[146px] pl-[9px] pr-2 pt-6 pb-5 left-[392px] top-[376px] absolute bg-neutral-700 rounded-lg shadow flex-col justify-end items-center gap-6 inline-flex">
                <div className="w-[339px] text-white text-xl font-medium font-['Fira Code']">Number of Verifications Done </div>
                <div className="text-white text-[40px] font-medium font-['Fira Code']">5</div>
            </div>
            <div className="h-[146px] px-[50px] pt-6 pb-5 left-[825px] top-[371px] absolute bg-neutral-700 rounded-lg shadow flex-col justify-end items-center gap-6 inline-flex">
                <div className="w-64 text-white text-xl font-medium font-['Fira Code']">Number of DID Checks </div>
                <div className="text-white text-[40px] font-medium font-['Fira Code']">8</div>
            </div>
            <div className="w-[356px] h-[370px] left-[390px] top-[586px] absolute bg-neutral-700 rounded-lg shadow">
                <div className="w-[319px] left-[16px] top-[22px] absolute text-white text-xl font-medium font-['Fira Code']">List of Organizations with your DID</div>
                <div className="w-[109px] left-[52px] top-[98px] absolute text-white text-base font-['Fira Code']">SSIS Bank</div>
                <div className="w-[140px] left-[48px] top-[135px] absolute text-white text-base font-['Fira Code']">National  Bank</div>
                <div className="w-[140px] left-[48px] top-[172px] absolute text-white text-base font-['Fira Code']">Park  Bank</div>
                <div className="w-[140px] left-[48px] top-[209px] absolute text-white text-base font-['Fira Code']">FastnPay MFB</div>
                <div className="w-[109px] left-[48px] top-[246px] absolute text-white text-base font-['Fira Code']">BULL  Bank</div>
                <div className="px-3 py-2 left-[203px] top-[299px] absolute bg-neutral-400 rounded-lg border border-green-500 justify-center items-center gap-2.5 inline-flex">
                    <Link href={""} className="w-[89px] text-black text-base font-['Fira Code']">View more</Link>
                </div>
                <div className="w-3 h-3 left-[16px] top-[103px] absolute bg-green-500 rounded-full" />
                <div className="w-3 h-3 left-[16px] top-[140px] absolute bg-green-500 rounded-full" />
                <div className="w-3 h-3 left-[16px] top-[177px] absolute bg-green-500 rounded-full" />
                <div className="w-3 h-3 left-[16px] top-[213px] absolute bg-green-500 rounded-full" />
                <div className="w-3 h-3 left-[16px] top-[251px] absolute bg-green-500 rounded-full" />
            </div>
        </div>
    );
}