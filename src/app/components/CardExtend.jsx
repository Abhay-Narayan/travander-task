/* eslint-disable @next/next/no-img-element */
"use client";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as Hearti } from "@heroicons/react/24/outline";
import { useState } from "react";

const CardExtend = ({ location }) => {
  const [heart, setHeart]=useState(false);
  return (
    <div className="flex w-full shadow-lg p-2 rounded-lg gap-5">
      <div className="relative w-[260px]">
        <img
          src={location.imgLink}
          className="w-full h-[220px] rounded-lg"
          alt=""
        />
        <div onClick={()=>setHeart(!heart)} className='w-7 h-7 rounded-full border bg-white shadow-md flex items-center justify-center absolute right-3 top-3'>
            { heart?( <HeartIcon className="h-5 w-5  text-red-500" />):
                ( <Hearti className="h-5 w-5 " />)
            }            
          </div>
      </div>
      <div className="flex flex-col gap-3 justify-center">
        <p className="text-lg font-semibold">{location.name}</p>
        <div className="w-full flex items-center justify-between">
          <span className="text-gray-600 text-xs">
            Start Date: {location.date}
          </span>
          <p className="text-xs text-gray-600 font-semibold">By {location.author}</p>
        </div>
        <h2 className="font-medium w-[80%]">{location.desc}</h2>
        <h2 className=" text-sky-600">Best Price Guarantee</h2>
      </div>
      <div className="border-l w-[30%] flex items-center justify-center">
        4 Days 3 Nights
      </div>
    </div>
  );
};

export default CardExtend;
