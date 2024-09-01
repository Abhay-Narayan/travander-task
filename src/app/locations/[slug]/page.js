/* eslint-disable @next/next/no-img-element */
"use client";
import { PRODUCTS } from "@/app/assets/products";
import CardExtend from "@/app/components/CardExtend";
import PaymentCard from "@/app/components/PaymentCard";
import ReviewCard from "@/app/components/ReviewCard";
import Traveller from "@/app/components/Traveller";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";


const startLocations = [
  {
    name: "Goa",
    price: 1200,
    time: "SEP 15  9:00 A.M",  // Adjusted to match the general travel time pattern
  },
  {
    name: "Delhi",
    price: 1000,
    time: "OCT 26  10:00 A.M", // Adjusted for a different travel time
  },
  {
    name: "Jaipur",
    price: 1500,
    time: "NOV 01  11:00 A.M", // Adjusted for a slightly later travel time
  },
  {
    name: "Chandigarh",
    price: 2000,
    time: "OCT 16  12:00 P.M", // Adjusted for a noon travel time
  },
];


const Card = ({ loc , handleonCard}) => {
  
  return (
    <div onClick={()=>handleonCard(loc)} className="flex w-full items-center justify-center border-b border border-x-0 border-t-0 hover:bg-gray-50 hover:cursor-pointer text-sm p-[0.3rem]">
      <h1 className="w-[33.33%]">{loc.name}</h1>
      <h2 className="w-[33.33%] text-gray-600">INR {loc.price}</h2>
      <h3 className="w-[33.33%] text-gray-600">{loc.time}</h3>
    </div>
  );
};


const Page = ({ params }) => {
  const { slug } = params;
  const product = PRODUCTS.find((item) => item.id === Number(slug));
  const [count, setCount] = useState(1);
  const [startp, setStartp] = useState("");
  const [showdown,setShowdown]=useState(false);
  const [newdate, setDate]=useState("");
  const [price,setPrice]=useState(0);
  const [name,setName]=useState("");
  const [contact,setcontact]=useState("");
  const [age,setage]=useState(0);
  const [email,setemail]=useState("");
  const handleonCard=(location)=>{
    console.log(location);
    setStartp(location.name);
    setDate(location.time);
    setPrice(location.price);
    setShowdown(!setShowdown)
  }
  return (
    <div className="w-[90%] mx-auto flex mt-10 gap-20">
      <div className="w-[65%] flex flex-col gap-5">
        {/* card */}
        <CardExtend location={product} />
        <div className="flex mt-3 p-1 gap-3 items-center justify-between">
          <div className="flex justify-between items-center shadow-md rounded-lg w-[65%] p-3 relative text-sm">
            <div className="flex flex-col items-center">
              <h1 className="flex items-center gap-2">
                Starting point: {startp} <ChevronDownIcon onClick={()=>setShowdown(!showdown)} className="w-6 h-6 hover:cursor-pointer" />INR {price}
              </h1>
              {showdown && (
                <div className="absolute border flex flex-col items-center w-full left-0 top-16 rounded-lg bg-white shadow-md mt-1">
                {startLocations.map((location)=>(
                  <Card handleonCard={handleonCard} loc={location} key={location.name}/>
                ))}
              </div>
              )}
              
              <p className="text-gray-500 text-xs">
                {newdate}
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h1>End point: {product?.name}</h1>
              <p className="text-gray-500 text-xs">
                 {product?.date}
              </p>
            </div>
          </div>
          <h1>#6516584</h1>
          <h1>Bengaluru, India</h1>
        </div>
        <div className="flex flex-col p-1 gap-5">
          <h1 className="font-semibold">Group Size: 10 Travellers</h1>
          <div className="flex items-center gap-3 text-sm font-semibold">
            <p>Number of travellers:</p>
            <div
              onClick={() => setCount(count > 1 ? count - 1 : 1)}
              className="w-6 h-6 rounded-full border border-black flex items-center justify-center hover:cursor-pointer"
            >
              -
            </div>
            <span className="w-4 text-center">{count}</span>
            <div
              onClick={() => setCount(count < 10 ? count + 1 : 10)}
              className="w-6 h-6 rounded-full border border-black flex items-center justify-center hover:cursor-pointer"
            >
              +
            </div>
          </div>
          {/* Card */}
          <div className="flex flex-col w-full gap-5">
            <div className="flex flex-col w-[80%] gap-4">
              <h1 className="text-lg font-semibold">First Traveller</h1>
              <div className="flex items-center gap-7 w-full">
                <div className="flex flex-col w-full gap-3 text-sm">
                  <span>Name</span>
                  <input
                    type="text"
                    className="border focus:outline-none border-b-gray-400 border-b-2 border-t-0 border-x-0"
                    required
                    onChange={(e)=>setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full gap-3 text-sm">
                  <span>Age</span>
                  <input
                    type="text"
                    className="border focus:outline-none border-b-gray-400 border-b-2 border-t-0 border-x-0"
                    required
                    onChange={(e)=>setage(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center gap-7 w-full text-sm">
                <div className="flex flex-col w-full gap-3">
                  <span>Contact No.</span>
                  <input
                    type="text"
                    className="border focus:outline-none border-b-gray-400 border-b-2 border-t-0 border-x-0"
                    required
                    onChange={(e)=>setcontact(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full gap-3">
                  <span>Email ID</span>
                  <input
                    type="email"
                    className="border focus:outline-none border-b-gray-400 border-b-2 border-t-0 border-x-0"
                    required
                    onChange={(e)=>setemail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {/* Displaying thenumber if travellers for their information */}
            {count > 1 &&
              Array.from({ length: count - 1 }, (_, index) => (
                <Traveller key={index} number={index + 2} />
              ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[33%] gap-3">
        <ReviewCard />
        <PaymentCard person={count} price={product?.price} name={name} age={age} contact={contact} email={email} />
      </div>
    </div>
  );
};

export default Page;
