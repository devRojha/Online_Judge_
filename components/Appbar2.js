"use client"

import { useRouter } from "next/navigation";

export default function Appbar2() {
  const router = useRouter()
    return (
      <div className="w-full z-40 py-4 px-4 bg-black text-white flex justify-end fixed top-14">
        <div className="mr-40 max-lg:mr-10 max-md:mr-4 max-md:space-x-8 max-md:text-[12px] max-sm:space-x-4  max-sm:mr-1 space-x-20">
            <button onClick={()=>router.push("/")} className="hover:text-blue-600">Home</button>
            <button onClick={()=>router.push("/about")} className="hover:text-blue-600">About</button>
            <button onClick={()=>router.push("/problemset")} className="hover:text-blue-600">Problems</button>
            <button onClick={()=>router.push("/contest")} className="hover:text-blue-600">Contest</button>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    );
  }
  