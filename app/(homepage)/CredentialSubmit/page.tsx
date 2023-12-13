import Link from "next/link";
import Image from "next/image";

export default function CredentialSubmit() {
    return (
        <form className="w-[100%] h-[1024px] relative bg-black ">
            <div className="w-[336px] pl-16 pr-9 pt-8 pb-[587px] left-0 top-[190px] absolute rounded-lg border-r-2 border-green-500 flex-col justify-start items-start gap-8 inline-flex">
                <div className="px-4 py-3 justify-center items-center gap-2.5 inline-flex">
                    <Link href={""} className="w-[204px] text-zinc-100 text-xl font-semibold font-['Fira Code']">Dashboard</Link>
                </div>
                <div className="px-4 py-3 bg-green-500 rounded-lg border-l-8 border-zinc-100 justify-center items-center gap-2.5 inline-flex">
                    <Link href={""} className="text-black text-xl font-semibold font-['Fira Code']">Submit Credential</Link>
                </div>
                <div className="px-4 py-3 justify-center items-center gap-2.5 inline-flex">
                    <Link href={""} className="text-zinc-100 text-xl font-semibold font-['Fira Code']">Verify Credential</Link>
                </div>
            </div>
            <div className="w-[722px] left-[391px] top-[368px] absolute justify-center items-center gap-20 inline-flex">
                <div className="text-white text-xl font-['Fira Code']">Enter Name</div>
                <input type="text" placeholder="Enter Name" className="w-[522px] h-[53px] relative bg-neutral-700 rounded-lg border-b-2 border-zinc-100" ></input>
            </div>
            <div className="w-[722px] left-[391px] top-[453px] absolute justify-center items-center gap-5 inline-flex">
                <div className="text-white text-xl font-['Fira Code']">Credential Type</div>
                <select className="w-[500px] h-[60px] bg-neutral-700 rounded-lg border-b-2 border-zinc-100 justify-end items-center inline-flex">
                    <option value="">Credential Type</option>
                    <option value="##">##</option>
                    <option value="##">##</option>
                </select>
            </div>
            <div className="w-[722px] left-[391px] top-[538px] absolute justify-center items-center gap-8 inline-flex">
                <div className="text-white text-xl font-['Fira Code']">Select ID Type</div>
                <select className="w-[500px] h-[60px] bg-neutral-700 rounded-lg border-b-2 border-zinc-100 justify-end items-center inline-flex">
                    <option value="">Credential Type</option>
                    <option value="##">##</option>
                    <option value="##">##</option>
                </select>
            </div>
            <input type="submit" value={"Sumbit"} className="w-[322px] px-5 py-4 left-[944px] top-[751px] absolute bg-neutral-400 rounded-lg shadow border-2 border-green-500 justify-center items-center gap-2.5 inline-flex btn-submit text-black text-xl font-['Fira Code']" />

            <div className="left-[64px] top-[34px] absolute justify-start items-center gap-[110px] inline-flex">
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
                <div className="pr-[308px] rounded-lg border border-green-500 justify-start items-center gap-4 flex">
                    <div className="self-stretch px-4 py-[13.50px] bg-neutral-700 rounded-lg justify-start items-start gap-4 inline-flex">
                        <div className="w-6 h-6 relative">
                            <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
                        </div>
                        <div className="text-white text-xl font-['Fira Code']">Search</div>
                    </div>
                    <div className="text-neutral-400 text-xl font-['Fira Code']">Type anything...</div>
                </div>
                <div className="w-[168px] h-[60px] justify-center items-start gap-12 flex">
                    <div className="grow shrink basis-0 self-stretch px-[13px] py-3.5 bg-neutral-400 rounded-[30px] justify-center items-center inline-flex">
                        <div className="w-[34px] h-8 relative">
                            <div className="w-8 h-8 left-0 top-0 absolute bg-zinc-300" />
                            <div className="w-4 h-4 pl-[5px] pr-1 py-px left-[18px] top-[3px] absolute bg-green-500 rounded-lg justify-center items-center inline-flex">
                                <div className="text-black text-[11px] font-['Fira Code']">3</div>
                            </div>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 self-stretch px-2 pt-[7px] pb-1.5 bg-neutral-400 rounded-[30px] justify-center items-center inline-flex">
                        <div className="text-black text-4xl font-semibold font-['Fira Code']">TA</div>
                    </div>
                </div>
            </div>
            <div className="left-[392px] top-[210px] absolute flex-col justify-start items-start gap-[13px] inline-flex">
                <div className="text-white text-4xl font-semibold font-['Fira Code']">Credential</div>
                <div className="text-white text-xl font-['Fira Code']">Add credential to your DID instantly</div>
            </div>
            <div className="px-4 py-3 left-[64px] top-[830px] absolute justify-center items-center gap-2.5 inline-flex">
                <Link href={""} className="w-[204px] text-zinc-100 text-xl font-semibold font-['Fira Code']">Settings</Link>
            </div>
        </form>
    );
}