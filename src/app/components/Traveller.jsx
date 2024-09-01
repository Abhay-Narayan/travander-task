import React from 'react'

const getOrdinalWord = (number) => {
    const ordinals = {
      1: "First",
      2: "Second",
      3: "Third",
      4: "Fourth",
      5: "Fifth",
      6: "Sixth",
      7: "Seventh",
      8: "Eighth",
      9: "Ninth",
      10: "Tenth"
    };
    
    return ordinals[number] || `${number}th`;
  };

const Traveller = ({number}) => {
  return (
    <div className="flex flex-col w-[80%] gap-4">
            <h1 className="text-lg font-semibold">{getOrdinalWord(number)} Traveller</h1>
            <div className="flex items-center gap-7 w-full">
              <div className="flex flex-col w-full gap-3 text-sm">
                <span>Name</span>
                <input
                  type="text"
                  className="border focus:outline-none border-b-gray-400 border-b-2 border-t-0 border-x-0"
                />
              </div>
              <div className="flex flex-col w-full gap-3 text-sm">
                <span>Age</span>
                <input
                  type="text"
                  className="border focus:outline-none border-b-gray-400 border-b-2 border-t-0 border-x-0"
                />
              </div>
            </div>
          </div>
  )
}

export default Traveller