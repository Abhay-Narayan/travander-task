import Link from "next/link";
import React from "react";

const BookingModal = ({ name, age, contact, email, onClose, person, price }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md">
        <h1 className="text-lg font-semibold mb-4">🚤Booking Successfull!!🚤</h1>
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <p className="font-medium">Name:</p>
            <p>{name}</p>
          </div>
          <div className="flex gap-3 items-center">
            <p className="font-medium">Age:</p>
            <p>{age}</p>
          </div>
          <div className="flex gap-3 items-center">
            <p className="font-medium">Contact:</p>
            <p>{contact}</p>
          </div>
          <div className="flex gap-3 items-center">
            <p className="font-medium">Email:</p>
            <p>{email}</p>
          </div>
          <div className="flex gap-3 items-center">
            <p className="font-medium">Total Travellers:</p>
            <p>{person}</p>
          </div>
          <div className="flex gap-3 items-center">
            <p className="font-medium">Total Amount:</p>
            <p>{price*person}</p>
          </div>
        </div>
        <div className="flex w-full gap-2">
          <button
            onClick={onClose}
            className="mt-4 bg-blue-500 text-white p-2 rounded-full w-[45%] mx-auto "
          >
            Close
          </button>
          
          <Link className=" rounded-full w-[45%] mx-auto" href='/'>
            <button
              className="mt-4 bg-blue-500 text-white p-2 rounded-full w-full "
            >
              Back to Home
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
