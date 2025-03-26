import React from "react";
import { Outlet } from 'react-router-dom'
import "./login.css";

const Login = () => {
  return (
    <div className="login w-screen h-screen bg-cover">
      <div className="w-full h-full backdrop-blur-sm flex items-center justify-center">
        <div className="w-8/12 h-4/6 bg-slate-100 shadow-slate-950 shadow-md rounded-md flex">
          <div className="w-1/2 h-full p-2">
            <Outlet />
          </div>
          <div className="business w-1/2 h-full bg-center bg-cover rounded-md">
            <div className="bg-gray-950 bg-opacity-40 h-full rounded-e-md flex-col justify-center align-middle">
              <h1 className="text-3xl text-center font-extrabold text-white pt-9">
                TRANSACT MANAGER
              </h1>
              <p className="text-white text-sm font-bold text-center mt-5">
                Welcome to TRANSACT MANAGER – Innovation Meets Excellence
              </p>
              <p className="text-white text-sm font-medium text-center">
                At TRANSACT MANAGER, we are committed to delivering top-notch
                solutions that drive success. Whether you’re looking for where
                to track your transactions or where to track your business, we
                provide cutting-edge expertise and customer-centric services to
                help you achieve your goals. With a passion for excellence and a
                dedication to innovation, we strive to create impactful
                solutions tailored to your needs. Explore our offerings and
                let’s build something extraordinary together!
              </p>
              <p className="text-white text-sm font-bold text-center mb-5">
                Your Success, Our Priority.
              </p>

              <div className="flex justify-center w-full m-0">
                <a
                  href="#"
                  className="bg-green-600 py-2 px-10 rounded-md text-slate-100 align-middle text-center flex justify-center hover:font-bold hover:bg-green-400"
                >
                  View Docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
