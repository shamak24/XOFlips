// pages/Landing.js
import { useNavigate } from "react-router-dom";
import FallingHearts from "../components/FallingHearts"; // Adjust the import path as necessary
import React from "react";
import Badge from '@mui/material/Badge';

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-pink-300 to-purple-300">
      <FallingHearts>
      <h1 className="pacifico-bold text-5xl mb-4 ">XOFlips
        <img src="/xofliplogo1.png" alt="logo" className=" w-20 h-20 inline-block ml-3 mb-4" />
      </h1>
      <h3 className="text-2xl mb-3 text-blue font-bold">Moments captured in little folds of love</h3>
      <p className="text-lg mb-6 text-gray-700">
        Create, share, and redeem love notes that speak louder than words. 💌✨
      </p>
      <Badge
        className="hover:scale-105 transition duration-300 ease-in-out transform"
        overlap="circular"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}

        badgeContent={
          <span className="text-4xl font-bold rounded-full pl-3 py-1">
            🎀
          </span>
        } 
      >
      <button onClick={() => navigate("/dashboard")} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded rounded-full h-15 w-40 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
        <h2 className="font-family-roboto font-bold text-center">Enter XOFlips</h2>
      </button>
      </Badge>
      </FallingHearts>
    </div>
  );
}
