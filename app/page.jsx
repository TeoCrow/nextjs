"use client";
import React from "react";
import "./globals.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
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
  console.log(process.env.REACT_IMG_URL);
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
          <SwiperSlide className="sm:px-10">
            <Image
              src={`http://source.unsplash.com/1000x600?computer`}
              alt="tes"
              width={1000}
              height={400}
              className="h-72 rounded-lg   mb-10 shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="px-10">
            <Image
              src={`http://source.unsplash.com/1000x600?computer`}
              alt="tes"
              width={1000}
              height={400}
              className="h-72 rounded-lg   mb-10 shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide className="px-10">
            <Image
              src={`http://source.unsplash.com/1000x600?computer`}
              alt="tes"
              width={1000}
              height={400}
              className="h-72 rounded-lg   mb-10 shadow-lg"
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
