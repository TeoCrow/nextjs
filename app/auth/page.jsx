import React from "react";
import Image from "next/image";

import logo from "../../public/image/T.png";
export default function Login() {
  return (
    <section className="flex items-center justify-center w-full h-full ">
      <div className="w-[440px] bg-red-300 py-6 px-10 rounded-3xl">
        <Image src={logo} width={100} height={100} className=" mx-auto" />
        <p className="font-bold text-lg text-center mb-4">Masuk Akun</p>
        <div className="font-semibold mb-5 text-sm">
          <p className="mb-2">Alamat Email</p>
          <input type="email" className=" p-3 rounded-md w-full" />
        </div>
        <div className="font-semibold mb-5 text-sm">
          <p className="mb-2">Password</p>
          <input type="password" className=" p-3 rounded-md w-full" />
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
