import React from "react";
import { useState, useEffect } from "react";

export const ModifyingStatus = () => {
    const [cusName, setCusName] = useState()
    return (
        <div>
            <div className="newcus">
        <h1 className="bg-blue-950 text-white font-bold p-3 pl-12 w-full">
          New Customers
        </h1>
        <div className="border-2 rounded-md border-blue-950 m-2">
          <form
            className="grid grid-cols-2 m-5 mx-10 gap-5 gap-x-16 align-middle justify-center"
            onSubmit={(e) => handleSubmit(e)}
          >
            <label>
              Customers Name
              <input
                type="text"
                placeholder="Enter your Customer Username"
                onChange={(e) => {
                  setCusName(e.target.value);
                }}
              />
            </label>
            <label>
              Company
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Enter your Customer Phone Number"
                onChange={(e) => setCusCompany(e.target.value)}
              />
            </label>
            <label className="row-span-2">
              Address
              <textarea
                placeholder="Enter your address"
                className="h-full"
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </label>
            <label>
              Phone Number
              <input
                type="text"
                placeholder="Enter your Customer Email Address"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </label>
            <label>
              Branch/Domicile
              <input
                type="text"
                placeholder="Enter your Customer Identity Number"
                onChange={(e) => setBranch(e.target.value)}
              />
            </label>
            <label>
              Opening Date
              <input
                type="text"
                placeholder="Enter your Customer Postal Code"
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <label>
              Credit Limit
              <input
                type="text"
                placeholder="Enter your Customer Address"
                onChange={(e) => setCreditLimit(e.target.value)}
              />
            </label>
            <label>
              Opening Balance
              <input
                type="text"
                placeholder="Enter your Customer Address"
                onChange={(e) => setOpeningBalance(e.target.value)}
              />
            </label>
            <p className="text-red-500 font-bold text-sm">{error ? error : 'Processing'}</p>
            <button
              type="submit"
              className="bg-blue-950 text-white font-bold rounded-full col-span-2 w-96 h-10 justify-self-center"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
        </div>
    )
}