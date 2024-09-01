/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as Hearti } from "@heroicons/react/24/outline";
import Link from 'next/link'

const LocationCard = ({product}) => {
    const [heart, setHeart]=useState(false);
  return (
    <div className='hover:scale-105 w-[260px] h-[344px] rounded-2xl shadow-lg  flex flex-col p-3 bg-[#ffffff] gap-[0.7rem] transition-all duration-500 '>
        <div className='relative mt-1'>
          <Link href={`/locations/${product.id}`}>
            <img className='rounded-lg h-[157px] hover:cursor-pointer' src={product.imgLink} alt='location image'/>
          </Link>
          <div onClick={()=>setHeart(!heart)} className='w-7 h-7 rounded-full border bg-white shadow-md flex items-center justify-center absolute right-2 top-[140px]'>
            { heart?( <HeartIcon className="h-5 w-5  text-red-500" />):
                ( <Hearti className="h-5 w-5 " />)
            }            
          </div>
        </div>
        <p className='text-gray-600 text-xs'>{product.name}</p>
        <h2 className='font-medium'>{product.desc}</h2>
        <div className='w-full flex items-center justify-between'>
            <span className='text-gray-600 text-xs'>Start Date: {product.date}</span>
            <p className='text-sm '>By {product.author}</p>
        </div>
        <hr />
        <div className='w-full flex items-center justify-between'>
            <span className='text-sm font-light'>4D/3N</span>
            <p className=''>₹ {product.price}</p>
        </div>
    </div>
  )
}

export default LocationCard