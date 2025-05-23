import React from "react";
import { useState, useEffect } from "react";
import "./newcustomers.css";
import axios from "axios";

const NewCustomers = () => {
  const [userID, setUserID] = useState(null);
  const [cusName, setCusName] = useState(null);
  const [cusCompany, setCusCompany] = useState(null);
  const [address, setAddress] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [branch, setBranch] = useState(null);
  const [date, setDate] = useState(null);
  const [creditLimit, setCreditLimit] = useState(null);
  const [openingBalance, setOpeningBalance] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUserID = localStorage.getItem("users_id");
    if (storedUserID) {
      setUserID(storedUserID);
    }
  }, []);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    setError("");

    try {
      const created = await axios.post("http://localhost:3500/addcustomers", {
        users_id: userID,
        cusName: cusName,
        cusCompany: cusCompany,
        address: address,
        phoneNumber: phoneNumber,
        branch: branch,
        date: date,
        creditLimit: creditLimit,
        openingBalance: openingBalance,
      });
      console.log("Server response:", created.data); // Log response data
      setError(created.data); // Set success/error message from server
    } catch (err) {
      console.error("Request error:", err.response?.data || err.message);
      setError(err.response?.data || "An error occurred."); // Set human-readable error message
      console.error("Request failed:", err); // Log full error for debugging

      // Prevent the app from crashing
      if (!err.response) {
        setError("Network error. Please check your internet connection.");
      } else if (err.response.status === 400) {
        setError("Bad request. Please check your inputs.");
      } else if (err.response.status === 500) {
        setError("Server error. Try again later.");
      } else {
        setError(err.response?.data || "An unknown error occurred.");
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

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
  );
};

export default NewCustomers;
