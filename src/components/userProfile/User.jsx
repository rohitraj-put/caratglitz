import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import { useAPI } from "../../context/APIContextProvider";

function User() {
  const { data } = useAPI();
  console.log(data);

  return (
    <>
      <Navbar />
      <Header />
      <div className="flex justify-between items-center p-10">
        <h1 className="text-3xl">
          Welcome,{" "}
          <span className="text-rose-400 text-4xl uppercase font-bold">
            {data.username}
          </span>
        </h1>
      </div>

      <div className="flex items-center w-full justify-center">
        <div className="max-w-xs">
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={data.avatar}
                alt={data.username}
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                {data.username}
              </h3>

              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Address
                    </td>
                    <td className="px-2 py-2">
                      Chatakpur-3, Dhangadhi Kailali
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Phone
                    </td>
                    <td className="px-2 py-2">+977 9955221114</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Email
                    </td>
                    <td className="px-2 py-2">john@example.com</td>
                  </tr>
                </tbody>
              </table>

              <div className="text-center my-3">
                <a
                  className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                  href="#"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
