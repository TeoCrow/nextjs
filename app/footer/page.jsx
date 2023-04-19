import React from "react";
import Link from "next/link";
import * as bi from "react-icons/bi";
import * as fa from "react-icons/fa";
import * as md from "react-icons/md";

export default function Footer() {
  return (
    <section className="w-full h-16 fixed bottom-0 bg-white shadow-2xl md:hidden flex items-center px-10 gap-3 text-xs justify-between mx-auto text-slate-500 z-20 ">
      <Link href={"/"}>
        <bi.BiHome className="mx-auto" size={22} />
        Home
      </Link>
      <Link href={"/cerita"}>
        <md.MdOutlineAutoStories className="mx-auto" size={22} />
        Cerita
      </Link>
      <Link href={"/user"}>
        <fa.FaRegUser className="mx-auto" size={22} />
        User
      </Link>
    </section>
  );
}
