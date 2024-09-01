/* eslint-disable @next/next/no-img-element */
"use client";

const CardExtend = ({ location }) => {
  return (
    <div className="flex w-full shadow-lg p-2 rounded-lg gap-5">
      <img
        src={location.imgLink}
        className="w-[220px] h-[220px] rounded-lg"
        alt=""
      />
      <div className="flex flex-col gap-3 justify-center">
        <p className="text-lg font-semibold">{location.name}</p>
        <div className="w-full flex items-center justify-between">
          <span className="text-gray-600 text-xs">
            Start Date: {location.date}
          </span>
          <p className="text-xs text-gray-600 ">By {location.author}</p>
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
