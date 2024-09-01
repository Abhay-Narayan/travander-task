/* eslint-disable @next/next/no-img-element */

import Link from "next/link"

const Navbar = () => {
  return (
    <div className='w-full h-20 flex items-center justify-around gap-52'>
        <div>        
            <img src="https://s3-alpha-sig.figma.com/img/6883/8de1/616cc1ce9998209bf17ac2d1dc911489?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VkvFbtw2y5cCA66hcYSsd~92xJ-vc-1YaM8F5E8VX29G8tW2NF2tKyYMoSYxsAdgEUyg-HZMRmT~OFmFNwtX1BgA1yZpdCT-EnWFz6rwixR5sefyGyDU3PppNsNeJ-L5q8BR1bQJ1S1m-JSK1o7VuowSk30TFzFOkpo5Zn1sgDdXwHvPmnl6VgeSb1j39rxtlX~0S8F79yMlESvwPCAXGnXkmgFA8aUyZCVowo~4v5yQUTCI81mlpBviYnmyVqfSmMAHqaUhOYQLKIARk0iC~82kAdjS2BGrkpYGi1If30SlaJ6V3TGKsNby5BmB~yekdVxSbKSCmisqkNPli6grpA__" className="w-[151px] h-[32px]" alt="" />
        </div>
        <div className="flex items-center justify-center gap-9">
            <Link href='/' className="font-semibold underline">
                Home
            </Link>
            <Link href='/'>
                Community
            </Link>
            <Link href='/'>
                About us
            </Link>
            <button className="font-bold rounded-full shadow-md p-2 w-[160px]">Log In</button>
        </div>
    </div>
  )
}

export default Navbar