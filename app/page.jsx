"use client";
import React from "react";
import "./globals.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import bg1 from "../public/image/bg1.png";
import bg2 from "../public/image/bg2.png";
import bg3 from "../public/image/bg3.png";
import cover from "../public/image/cover.png";
// async function getImage() {
//   let data = await fetch(
//     "https://api.themoviedb.org/3/discover/movie/?api_key=1b4d7b6fba3d6451e9943ecf9c29d612"
//   );
//   return data.json();
// }
// async function getData() {
//   const w = new Wattpad();
//   const data = await w.Stories.search("LAUTAN DAN DENDAM");
//   return data;
// }
export default function Home() {
  // const dataImage = await getImage();
  // const data = await getData();
  return (
    <div>
      <section>
        <h1 className="mb-2 font-bold text-xl">
          Mulailah Perjalan Penuh Cerita
        </h1>
        <p className="text-slate-400 mb-4">Ada dunia penuh cerita mysteri</p>
        {/* <div className="w-full h-72 bg-sky-300 rounded-2xl shadow-md"></div> */}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide className="sm:px-10 ">
            <Image
              src={bg1}
              alt="tes"
              width={1000}
              height={400}
              className="sm:h-72 h-52 rounded-lg mb-10 shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="sm:px-10">
            <Image
              src={bg2}
              alt="tes"
              width={1000}
              height={400}
              className="sm:h-72 h-52 rounded-lg mb-10 shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="sm:px-10">
            <Image
              src={bg3}
              alt="tes"
              width={1000}
              height={400}
              className="sm:h-72 h-52 rounded-lg mb-10 shadow-lg"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="my-7">
        <p className="text-2xl text-slate-600 font-semibold">
          Selamat Datang Wahyu
        </p>
      </section>
      <section>
        <p>Silahkan Pilih Cerita yang kamu suka</p>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 my-3">
          <div>
            <Image
              src={cover}
              width={1000}
              height={1080}
              alt="cover"
              className="rounded-xl shadow-lg"
            />
            <p className="text-sm mt-2 font-semibold text-slate-500 text-center bg-white rounded-full p-1 shadow-md shadow-slate-200">
              Wahyu
            </p>
          </div>
          <div>
            <Image
              src={cover}
              width={1000}
              height={1080}
              alt="cover"
              className="rounded-xl shadow-lg"
            />
            <p className="text-sm mt-2 font-semibold text-slate-500 text-center bg-white rounded-full p-1 shadow-md shadow-slate-200">
              Wahyu
            </p>
          </div>
          <div>
            <Image
              src={cover}
              width={1000}
              height={1080}
              alt="cover"
              className="rounded-xl shadow-lg"
            />
            <p className="text-sm mt-2 font-semibold text-slate-500 text-center bg-white rounded-full p-1 shadow-md shadow-slate-200">
              Wahyu
            </p>
          </div>
          <div>
            <Image
              src={cover}
              width={1000}
              height={1080}
              alt="cover"
              className="rounded-xl shadow-lg"
            />
            <p className="text-sm mt-2 font-semibold text-slate-500 text-center bg-white rounded-full p-1 shadow-md shadow-slate-200">
              Wahyu
            </p>
          </div>
          <div>
            <Image
              src={cover}
              width={1000}
              height={1080}
              alt="cover"
              className="rounded-xl shadow-lg"
            />
            <p className="text-sm mt-2 font-semibold text-slate-500 text-center bg-white rounded-full p-1 shadow-md shadow-slate-200">
              Wahyu
            </p>
          </div>
          <div>
            <Image
              src={cover}
              width={1000}
              height={1080}
              alt="cover"
              className="rounded-xl shadow-lg"
            />
            <p className="text-sm mt-2 font-semibold text-slate-500 text-center bg-white rounded-full p-1 shadow-md shadow-slate-200">
              Wahyu
            </p>
          </div>
          <div>
            <Image
              src={cover}
              width={1000}
              height={1080}
              alt="cover"
              className="rounded-xl shadow-lg"
            />
            <p className="text-sm mt-2 font-semibold text-slate-500 text-center bg-white rounded-full p-1 shadow-md shadow-slate-200">
              Wahyu
            </p>
          </div>
          <div>
            <Image
              src={cover}
              width={1000}
              height={1080}
              alt="cover"
              className="rounded-xl shadow-lg"
            />
            <p className="text-sm mt-2 font-semibold text-slate-500 text-center bg-white rounded-full p-1 shadow-md shadow-slate-200">
              Wahyu
            </p>
          </div>
          <div>
            <Image
              src={cover}
              width={1000}
              height={1080}
              alt="cover"
              className="rounded-xl shadow-lg"
            />
            <p className="text-sm mt-2 font-semibold text-slate-500 text-center bg-white rounded-full p-1 shadow-md shadow-slate-200">
              Wahyu
            </p>
          </div>
          <div>
            <Image
              src={cover}
              width={1000}
              height={1080}
              alt="cover"
              className="rounded-xl shadow-lg"
            />
            <p className="text-sm mt-2 font-semibold text-slate-500 text-center bg-white rounded-full p-1 shadow-md shadow-slate-200">
              Wahyu
            </p>
          </div>
          <div>
            <Image
              src={cover}
              width={1000}
              height={1080}
              alt="cover"
              className="rounded-xl shadow-lg"
            />
            <p className="text-sm mt-2 font-semibold text-slate-500 text-center bg-white rounded-full p-1 shadow-md shadow-slate-200">
              Wahyu
            </p>
          </div>
          <div>
            <Image
              src={cover}
              width={1000}
              height={1080}
              alt="cover"
              className="rounded-xl shadow-lg"
            />
            <p className="text-sm mt-2 font-semibold text-slate-500 text-center bg-white rounded-full p-1 shadow-md shadow-slate-200">
              Wahyu
            </p>
          </div>
          <div>
            <Image
              src={cover}
              width={1000}
              height={1080}
              alt="cover"
              className="rounded-xl shadow-lg"
            />
            <p className="text-sm mt-2 font-semibold text-slate-500 text-center bg-white rounded-full p-1 shadow-md shadow-slate-200">
              Wahyu
            </p>
          </div>
          <div>
            <Image
              src={cover}
              width={1000}
              height={1080}
              alt="cover"
              className="rounded-xl shadow-lg"
            />
            <p className="text-sm mt-2 font-semibold text-slate-500 text-center bg-white rounded-full p-1 shadow-md shadow-slate-200">
              Wahyu
            </p>
          </div>
          <div>
            <Image
              src={cover}
              width={1000}
              height={1080}
              alt="cover"
              className="rounded-xl shadow-lg"
            />
            <p className="text-sm mt-2 font-semibold text-slate-500 text-center bg-white rounded-full p-1 shadow-md shadow-slate-200">
              Wahyu
            </p>
          </div>

          {/* {data.stories.map((data, i) => {
            return (
              <>
                <div key={i}>
                  <img
                    src={data.cover}
                    className="rounded-md  shadow-lg"
                    alt=""
                  />
                  <p className="text-xs mt-2 text-slate-500">{data.title}</p>
                </div>
              </>
            );
          })} */}
        </div>
      </section>
    </div>
  );
}
