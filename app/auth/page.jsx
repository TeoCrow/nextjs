import React from "react";
import Image from "next/image";

import logo from "../../public/image/T.png";
import svglogo from "../../public/image/login.svg";
export default function Login() {
  return (
    <section className="flex items-center justify-center w-full h-full ">
      <div className="md:w-[440px] w-full h-full bg-white py-6 px-10 rounded-3xl shadow-md shadow-slate-200">
        <Image
          src={logo}
          width={100}
          height={100}
          alt="logo"
          className="hidden md:flex mx-auto"
        />
        <Image
          src={svglogo}
          width={1000}
          height={1000}
          alt="logo"
          className=" mx-auto md:hidden"
        />
        <p className="font-bold text-lg text-center mb-4 ">Masuk Akun</p>
        <div className="font-semibold mb-5 text-sm">
          <p className="mb-2">Alamat Email</p>
          <input type="email" className=" p-3 rounded-lg w-full bg-stone-50" />
        </div>
        <div className="font-semibold mb-5 text-sm">
          <p className="mb-2">Password</p>
          <input
            type="password"
            className=" p-3 rounded-lg w-full bg-stone-50"
          />
        </div>
        <div className="flex justify-between text-sm font-semibold mb-4">
          <div>
            <p>Belum Punya Akun ?</p>
            <p className="text-sky-400">Register</p>
          </div>
          <div>
            <p>Lupa Password</p>
            <p className="text-sky-400">Reset Password</p>
          </div>
        </div>
        <button className="bg-sky-400 p-2 w-full text-white font-bold rounded-lg">
          Masuk
        </button>
      </div>
    </section>
  );
}
