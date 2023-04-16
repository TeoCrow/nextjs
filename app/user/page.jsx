"use client";

import React, { useState } from "react";
import * as fa from "react-icons/fa";
import * as bs from "react-icons/bs";
import * as bi from "react-icons/bi";
export default function User() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className="text-2xl font-bold">Pengaturan Akun</p>
      <p className="my-5">Berisi informasi akun, profil dan ubah password.</p>
      <section className="flex gap-4">
        <div className="grid">
          <div>
            <div className="w-60 h-52 bg-gradient-to-r from-stone-50 via-purple-50 border rounded-t-lg p-4">
              <div className="w-16 h-16 bg-sky-400 rounded-full mb-6"></div>
              <p>Wahyu</p>
            </div>
            <div className="w-60 h-56 bg-gradient-to-r from-stone-50 via-purple-50 border rounded-b-lg pl-4 grid font-semibold">
              <div className="flex items-center justify-between gap-3">
                <fa.FaUserAlt className="bg-sky-400 w-8 h-8 p-2 rounded-lg text-white" />
                <p className="text-sky-500">Pengaturan Akun</p>
                <div className="w-2 h-10 bg-sky-400 rounded-l-md"></div>
              </div>
              <div className="flex items-center gap-3">
                <bs.BsCreditCard className="bg-slate-300 w-8 h-8 p-2 rounded-lg text-white" />
                Transaksi Saya
              </div>
              <div className="flex items-center gap-3">
                <bs.BsTicketPerforated className="bg-slate-300 w-8 h-8 p-2 rounded-lg text-white" />
                Voucher Promo
              </div>
              <div className="flex items-center gap-3">
                <bi.BiLinkAlt className="bg-slate-300 w-8 h-8 p-2 rounded-lg text-white" />
                Pengaturan Akun
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-96 bg-gradient-to-r from-stone-50 via-purple-50 rounded-lg border p-4">
          <div className="flex items-center gap-3 mb-5">
            <p className="font-semibold text-sky-500">Profil</p>
            <div className="w-full border-t-2"></div>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Nama</p>
            <input
              type="text"
              className="w-full rounded-md h-9 border focus:border-0 focus:ring-0"
              name=""
              id=""
            />
          </div>
          <div className="mb-4">
            <p className="font-semibold">Email</p>
            <input
              type="text"
              className="w-full rounded-md h-9 border focus:border-0 focus:ring-0"
              name=""
              id=""
            />
          </div>
          <div className="mb-4">
            <p className="font-semibold">Password</p>
            <input
              type="text"
              className="w-full rounded-md h-9 border focus:border-0 focus:ring-0"
              name=""
              id=""
            />
          </div>
          <div className="flex justify-end mt-10">
            <button className="bg-sky-400 p-2 rounded-md text-white font-semibold">
              Simpan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
