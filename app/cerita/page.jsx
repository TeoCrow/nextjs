import React from "react";
import Wattpad from "wattpad.js";

async function getData() {
  const w = new Wattpad();
  const data = await w.Stories.read("1093719791");
  return data;
}

export default async function Cerita() {
  const data = await getData();
  return (
    <div>
      <p className="text-[16px] text-slate-700 whitespace-pre-wrap indent-8 text-justify leading-8">
        {data.text}
      </p>
    </div>
  );
}
