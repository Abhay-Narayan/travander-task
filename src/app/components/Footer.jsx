/* eslint-disable @next/next/no-img-element */
"use client";

const Footer = () => {
  return (
    <div className="bg-[#0077CC] w-full flex flex-col p-2 mt-14">
      <div className="flex items-start justify-around mt-9">
        <div className="mt-7">
          <img
            src="https://s3-alpha-sig.figma.com/img/dcff/1b29/37eef4eff8c4abaf51b3b3a7ae12d610?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pa6YBZVUi0o4rPiD1ayphQxKe1l4jupoGyNkb932AVkkSkRnj3u5St3r5PNn3tMCD8SFBXc-LmCOGdEzlXqDARPkGc0iQyuwJ51Zg2Uf6cpspzWemKScxFxfyGBiArvzJvwPWEGgal7cJYzOEZzm2~2pt6iPvCdLuOYYMMr4XqdGeueA4ix51ua8ITIvSOXFzDxdVruiFeE0LVnjRIBADeo-ZNjvfUHEUSyXv3aQ2Uu20JJazYwsmf08JEf~n4U9eHfyegpeX2cwdmWEDF3qAQtK~M9eA8knKfFILfDE8O~joQ6q57XL-VPlM4Mlh908oskYUUStNbwueS-wKH5BJw__"
            className="w-[151px] h-[32px]"
            alt=""
          />
        </div>

        <div className="flex items-center justify-between text-white w-[50%]">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Company</h1>
            <h3 className="mt-3">Home</h3>
            <h3>Community</h3>
            <h3>About us</h3>
            <h3>Login</h3>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Support</h1>
            <h3 className="mt-3">FAQ</h3>
            <h3>Terms & Conditions</h3>
            <h3>Privacy Policy</h3>
            <h3>Cancellation Policy</h3>
          </div>
          <div className="flex flex-col gap-2 -mt-4">
            <h1 className="text-xl font-bold">Contact</h1>
            <h3 className="mt-3">+91 9954785215</h3>
            <h3>hello@travander.com</h3>
            <div className="flex items-center justify-center gap-3 hover:cursor-pointer">
                <img src="https://img.icons8.com/?size=100&id=118467&format=png&color=FFFFFF" className="h-8 w-8" alt="" />
                <img src="https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF" className="h-8 w-8" alt="" />
                <img src="https://img.icons8.com/?size=100&id=A4DsujzAX4rw&format=png&color=FFFFFF" className="h-8 w-8" alt="" />
                <img src="https://img.icons8.com/?size=100&id=37326&format=png&color=FFFFFF" className="h-8 w-8" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center text-white border-t border-t-sky-500 mt-16 p-1">
        <h1>2021(c) ⎯⎯ Mochilero Travel Ventures Pvt. Ltd. All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
