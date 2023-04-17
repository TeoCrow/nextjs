import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import teo from "../public/image/T.png";
import * as bi from "react-icons/bi";
import * as fa from "react-icons/fa";
import * as md from "react-icons/md";
import { Quicksand } from "next/font/google";
const inter = Quicksand({ subsets: ["latin"] });
export const metadata = {
  title: "Belajar",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gradient-to-r from-stone-50 via-purple-50 to-stone-50">
        <section className="hidden md:flex bg-opacity-60 backdrop-blur-md bg-stone-50 shadow-sm shadow-slate-200 h-16 w-full  gap-4 items-center px-28 text-lg justify-between fixed z-20">
          <Image alt="teo" src={teo} width={60} height={60} />
          <div className="flex gap-10 font-bold">
            <Link href={"/"}>Home</Link>
            <Link href={"/cerita"}>Cerita</Link>
            <Link href={"/user"}>User</Link>
          </div>
        </section>
        <div className="pt-9 lg:pt-24 px-3 lg:px-72 mb-24">{children}</div>
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
      </body>
    </html>
  );
}
