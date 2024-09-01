/* eslint-disable @next/next/no-img-element */
import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as Str } from '@heroicons/react/24/outline'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-3 w-full'>
        <div className='flex flex-col items-center gap-2 justify-center w-full'>
            <div className='relative'>
            <img src="https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=1024&format=png&auto=webp&s=c4e9abc47d193474a2fa1a7e337d9d9340dce947" className='h-[150px] w-[150px] rounded-full' alt="" />
            <div className='absolute top-0 rounded-full w-9 h-9 text-center bg-sky-500 text-white text-5xl'>
              <span className='mt-2'>&quot;</span>
            </div>
            </div>
            
            <h1>Alex</h1>
            <div className='flex items-center justify-center gap-2'>
                <StarIcon className='w-4 h-4 text-sky-500 '/>
                <StarIcon className='w-4 h-4 text-sky-500'/>
                <StarIcon className='w-4 h-4 text-sky-500'/>
                <StarIcon className='w-4 h-4 text-sky-500'/>
                <Str className='w-4 h-4'/>
            </div>
            <h1 className='text-sm'>5 Trips Completed</h1>
        </div>
        <div className='flex flex-col items-center justify-center p-1 gap-2'>
                <h1 className='font-semibold text-lg'>Message from Alex</h1>
                <p >Congratulations on completing 5 amazing trips! Your passion for exploring new places and embracing new experiences is truly inspiring. Keep pushing your boundaries, and here’s to many more adventures ahead!
                </p>
            </div>
    </div>
  )
}

export default ReviewCard