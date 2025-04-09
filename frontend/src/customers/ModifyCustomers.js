import React from "react";
import "./newcustomers.css";

const ModifyCustomers = () => {
  
  return (
    <div className="modifycus">
      <h1 className="bg-blue-950 text-white font-bold p-3 pl-12 w-full">
        Modify Customer
      </h1>
      <div className="border-2 rounded-md border-blue-950 m-2">
        <form className="grid grid-cols-2 m-5 mx-10 gap-5 gap-x-16 align-middle justify-center">
          <label className="col-span-2 w-96 h-10 justify-self-center mb-4">
            Customer's Name
            <input type="text" placeholder="Enter your Customer Name" />
          </label>
          <input
            type="submit"
            className="bg-blue-950 text-white font-bold rounded-full col-span-2 w-36 h-10 justify-self-center"
          />
        </form>
      </div>
    </div>
  );
};

export default ModifyCustomers;
