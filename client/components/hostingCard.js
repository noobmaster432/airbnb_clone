import React from "react";
import Image from "next/image";

function HostingCard({ img, title, description, buttonText }) {
  return (
    <div className="relative pb-8 pt-12">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          fill
          className="rounded-2xl object-cover"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-white font-bold text-4xl mb-3 w-64">{title}</h3>
        <p className="text-white overflow-ellipsis">{description}</p>
        <button className="text-black text-sm bg-white px-4 py-2 rounded-lg mt-5 cursor-pointer hover:bg-slate-50">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default HostingCard;
