import React from "react";
import "./newcustomers.css"

const NewCustomers = () => {
  return (
    <div>
      <div className="newcus">
        <h1 className="bg-blue-950 text-white font-bold p-3 pl-12 w-full">
          New Customers
        </h1>
        <div className='border-2 rounded-md border-blue-950 m-2'>
          <form className="grid grid-cols-2 m-5 mx-10 gap-5 gap-x-16 align-middle justify-center">
            <label>
              Username
              <input type="text" placeholder="Enter your Customer Username" />
            </label>
            <label>
              Phone Number
              <input type="text" placeholder="Enter your Customer Phone Number" />
            </label>
            <label>
              Address
              <input type="text" placeholder="Enter your Customer Address" />
            </label>
            <label>
              Email Address
              <input type="text" placeholder="Enter your Customer Email Address" />
            </label>
            <label>
              Identity Number
              <input type="text" placeholder="Enter your Customer Identity Number" />
            </label>
            <label>
              Postal Code
              <input type="text" placeholder="Enter your Customer Postal Code" />
            </label>
            <label>
              Address
              <input type="text" placeholder="Enter your Customer Address" />
            </label>
            <label>
              Address
              <input type="text" placeholder="Enter your Customer Address" />
            </label>
            <label>
              Address
              <input type="text" placeholder="Enter your Customer Address" />
            </label>
            <label>
              Address
              <input type="text" placeholder="Enter your Customer Address" />
            </label>
            <input type="submit" className="bg-blue-950 text-white font-bold rounded-full col-span-2 w-96 h-10 justify-self-center" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCustomers;
