"use client";
import React, { useState } from "react";
import * as fa from "react-icons/fa";
import * as bs from "react-icons/bs";
import * as bi from "react-icons/bi";
import * as md from "react-icons/md";
import * as hi from "react-icons/hi";
import Image from "next/image";
import avatar from "../../public/image/avatar.png";

export default function User() {
  const [notif, setNotif] = useState(false);

  return (
    <>
      <section className="hidden md:grid">
        <p className="text-2xl font-bold">Pengaturan Akun</p>
        <p className="my-5">Berisi informasi akun, profil dan ubah password.</p>
        <section className="flex gap-4">
          <div className="grid">
            <div>
              <div className="w-60 h-52 bg-gradient-to-r from-stone-50 via-purple-50 border rounded-t-lg p-4">
                <div className="w-16 h-16 bg-sky-400 rounded-full mb-6">
                  <Image
                    src={avatar}
                    width={100}
                    alt="avatar"
                    height={100}
                    className="rounded-full"
                  />
                </div>
                <p>Wahyu</p>
              </div>
              <div className="w-60 h-56 bg-gradient-to-r from-stone-50 via-purple-50 border rounded-b-lg pl-4 grid font-semibold">
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <fa.FaUserAlt className="bg-sky-400 w-8 h-8 p-2 rounded-lg text-white" />
                    <p className="text-sky-500">Pengaturan Akun</p>
                  </div>
                  <div className="w-2 h-10 bg-sky-400 rounded-l-md"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 ">
                    <bs.BsCreditCard className="bg-slate-300 w-8 h-8 p-2 rounded-lg text-white" />
                    Transaksi Saya
                  </div>
                  <div className="w-2 h-10 bg-sky-400 rounded-l-md hidden"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <bs.BsTicketPerforated className="bg-slate-300 w-8 h-8 p-2 rounded-lg text-white" />
                    Voucher Promo
                  </div>
                  <div className="w-2 h-10 bg-sky-400 rounded-l-md hidden"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="gap-3 flex">
                    <bi.BiLinkAlt className="bg-slate-300 w-8 h-8 p-2 rounded-lg text-white" />
                    Linked
                  </div>
                  <div className="w-2 h-10 bg-sky-400 rounded-l-md hidden"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-gradient-to-r from-stone-50 via-purple-50 rounded-lg border p-4">
            <div className="flex items-center gap-3 mb-5">
              <p className="font-semibold text-sky-500">Profil</p>
              <div className="w-full border-t-2"></div>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Nama</p>
              <input
                type="text"
                className="w-full rounded-md h-9 border p-2 text-sm "
                placeholder="Masukkan nama anda"
              />
            </div>
            <div className="mb-4">
              <p className="font-semibold">Email</p>
              <input
                type="text"
                className="w-full rounded-md h-9 border focus:border-0 focus:ring-0 p-2 text-sm"
                placeholder="Masukkan email anda"
              />
            </div>
            <div className="mb-4">
              <p className="font-semibold">Password</p>
              <input
                type="password"
                className="w-full rounded-md h-9 border focus:border-0 focus:ring-0 p-2 text-sm"
                placeholder="Password anda"
              />
            </div>
            <div className="mb-4">
              <p className="font-semibold">Tanggal Lahir</p>
              <input
                type="date"
                className="w-full rounded-md h-9 border focus:border-0 focus:ring-0 p-2 text-sm"
              />
            </div>
            <div className="mb-4">
              <p className="font-semibold">No Telepon</p>
              <input
                type="number"
                className="w-full rounded-md h-9 border focus:border-0 focus:ring-0 p-2 text-sm"
                placeholder="Tanggal lahir anda"
              />
            </div>
            <div className="flex justify-end mt-10">
              <button className="bg-sky-400 p-2 rounded-md text-white font-semibold">
                Simpan
              </button>
            </div>
          </div>
        </section>
      </section>

      <section className=" md:hidden">
        <div className="w-full h-72 bg-gradient-to-b from-sky-400 to-sky-200 absolute left-0 top-0 rounded-b-3xl p-7 z-20">
          <div className="flex justify-between">
            <div className="w-16 h-16 bg-sky-400 rounded-full mb-6">
              <Image
                src={avatar}
                width={100}
                height={100}
                alt="avatar"
                className="rounded-full shadow-lg"
              />
            </div>
            <hi.HiOutlineBell
              size={28}
              className="text-white"
              onClick={() => setNotif(!notif)}
            />
            <section
              className={`bg-white rounded-xl  absolute top-16 right-5 ${
                notif == true ? "p-3" : "h-0 overflow-auto"
              } duration-300 shadow-md`}
            >
              <p>Tidak ada notifikasi</p>
            </section>
          </div>
          <p className="text-white">Selamat Siang</p>
          <p className="text-white font-semibold text-lg">Wahyu</p>
          <p className="text-white">Wahyuarfiansyah13@gmail.com</p>
          <div className="w-full bg-white mt-7 rounded-2xl text-sm p-5 grid gap-y-8 font-semibold shadow-md shadow-slate-200">
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <fa.FaUserAlt className="bg-sky-400 w-8 h-8 p-2 rounded-lg text-white" />
                <p className="text-sky-500">Pengaturan Akun</p>
              </div>
              <md.MdKeyboardArrowRight size={23} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-3 ">
                <bs.BsCreditCard className="bg-slate-300 w-8 h-8 p-2 rounded-lg text-white" />
                Transaksi Saya
              </div>
              <md.MdKeyboardArrowRight size={23} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <bs.BsTicketPerforated className="bg-slate-300 w-8 h-8 p-2 rounded-lg text-white" />
                Voucher Promo
              </div>
              <md.MdKeyboardArrowRight size={23} />
            </div>
            <div className="flex items-center justify-between">
              <div className="gap-3 flex">
                <bi.BiLinkAlt className="bg-slate-300 w-8 h-8 p-2 rounded-lg text-white" />
                Linked
              </div>
              <md.MdKeyboardArrowRight size={23} />
            </div>
          </div>
          <div className="flex justify-between mt-8 text-xs mb-3">
            <p>Versi 1.0</p>
            <p>NoteIce</p>
          </div>
          <button className="w-full bg-sky-300 p-3 rounded-md font-semibold text-white shadow-md shadow-sky-200">
            Keluar
          </button>
        </div>
        <div className="w-full h-52 bg-gradient-to-t from-sky-100  absolute left-0 bottom-0"></div>
      </section>
    </>
  );
}
