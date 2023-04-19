import React from "react";
import Image from "next/image";
import teo from "../../public/image/T.png";
import Link from "next/link";

const Header = () => {
  return (
    <section className="hidden md:flex bg-opacity-60 backdrop-blur-md bg-stone-50 shadow-sm shadow-slate-200 h-16 w-full  gap-4 items-center px-28 text-lg justify-between fixed z-20">
      <Image alt="teo" src={teo} width={60} height={60} />
      <div className="flex gap-10 font-bold">
        <Link href={"/"}>Home</Link>
        <Link href={"/cerita"}>Cerita</Link>
        <Link href={"/user"}>User</Link>
      </div>
    </section>
  );
};

export default Header;
