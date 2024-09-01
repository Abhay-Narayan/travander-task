'use client'
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SelectOptions = () => {
    const [calender,setcalender]=useState(false);
    const [value, onChange] = useState(new Date());
  return (
    <div className="p-5 h-[116px] shadow-lg rounded-full flex items-center justify-center gap-7 mt-24">
        <p className="text-sm font-medium">Select any one</p>
        <div className="flex gap-5">
          <div className="flex  gap-2">
            <PaperAirplaneIcon className="h-6 w-6 " />
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold" >Select Location</h1>
              <select name="locations" className="focus:outline-none text-gray-500">
                <option value="India">Location</option>
                <option value="India">India</option>
                <option value="Singapore">Singapore</option>
                <option value="Spain">Spain</option>
                <option value="Maldives">Maldives</option>
              </select>
            </div>
          </div>
          <div className="flex gap-2">
            <UserIcon className="h-6 w-6 " />
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold" >Select Traveller</h1>
              <select name="locations" className="focus:outline-none text-sky-500">
                <option value="India">Traveller</option>
                <option value="India">John</option>
                <option value="Singapore">Tyler</option>
                <option value="Spain">Spain</option>
                <option value="Maldives">Maldives</option>
              </select>
            </div>
          </div>
          <div className="flex  gap-2">
            <CalendarDaysIcon className="h-6 w-6 " />
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold" >Select Date</h1>
              <select onClick={()=>setcalender(!calender)} name="locations" className="focus:outline-none text-gray-500 z-0">
                <option  className="z-0" value="Date">Date</option>
              </select>
              { calender && (
                  <Calendar onChange={()=>{setcalender(!calender)}} value={value} className='absolute mt-16 z-50' />
              )}
            </div>
          </div>
        </div>
        <MagnifyingGlassIcon className="h-7 w-7 text-sky-500" />

      </div>
  )
}

export default SelectOptions