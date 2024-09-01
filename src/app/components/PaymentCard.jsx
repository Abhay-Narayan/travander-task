/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import BookingModal from "./BookingModal";

const PaymentCard = ({ person, price, name, contact, age, email }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRazorpayChecked, setIsRazorpayChecked] = useState(false);
  const [isPhonePeChecked, setIsPhonePeChecked] = useState(false);
  const validateName = (name) => name.trim() !== "";
  const validateContact = (contact) => /^[0-9]{10}$/.test(contact);
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleBooking = () => {
    if (!validateName(name)) {
      alert("Please enter a valid name.");
      return;
    }
    if (!validateContact(contact)) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!(isRazorpayChecked || isPhonePeChecked)) {
      alert("Please select at least one payment method.");
      return;
    }
    else {
      setIsModalOpen(true); // Open the modal on successful booking
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col p-3 gap-3 shadow-md rounded-lg w-full">
        <h1 className="font-semibold text-lg">Payment Details</h1>
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-gray-600">Total price per person: </p>
            <p className="text-gray-600">Total person in Booking: </p>
            <p className="text-gray-600">Total Discount: </p>
            <p className="text-gray-600">Total price: </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="">₹{price} </p>
            <p className="">{person} </p>
            <p className="">₹0 </p>
            <p className="">₹{person * price} </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-lg">Payment Via</h1>
          <div className="flex items-center">
            <input onChange={() => setIsRazorpayChecked(!isRazorpayChecked)} type="checkbox" />
            <img
              src="https://sellonboard.com/wp-content/uploads/2021/09/razorpay.png"
              className="w-20 h-auto"
              alt=""
            />
          </div>
          <div className="flex items-center gap-2">
            <input onChange={() => setIsPhonePeChecked(!isPhonePeChecked)} type="checkbox"  />
            <img
              src="https://seeklogo.com/images/P/phone-pe-2020-logo-3817ECEEA6-seeklogo.com.png"
              className="w-16 h-auto"
              alt=""
            />
          </div>
        </div>
        <hr className="mt-2" />
        <div className="flex w-full items-center gap-28">
          <h1 className="font-medium">Grand Total: </h1>
          <h1 className="font-medium">₹{price * person} </h1>
        </div>
        <div className="flex flex-col gap-3">
          <button
            onClick={handleBooking}
            className="p-2 bg-[#0077CC] rounded-full w-[50%] text-white font-medium"
          >
            Book Now
          </button>
          <p className="text-gray-600 text-sm mb-2">
            By Clicking on Book Now you confirm that all the details provided by
            you are correct, and accepting our TnC policy
          </p>
        </div>
      </div>

      {isModalOpen && (
        <BookingModal
          name={name}
          age={age}
          contact={contact}
          email={email}
          onClose={handleCloseModal}
          person={person}
          price={price}
        />
      )}
    </>
  );
};

export default PaymentCard;
