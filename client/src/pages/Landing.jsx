// pages/Landing.js
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-pink-500 to-purple-500">
      <h1 className="pacifico-bold text-5xl mb-4 ">XOFlips 💌</h1>
      <h3 className="text-2xl mb-3 text-blue font-bold">Sweet Romance with a Touch of Playful Fun</h3>
      <button onClick={() => navigate("/dashboard")} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded rounded-full h-15 w-40 shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
        <h2 className="font-family-roboto font-bold text-center">Enter XOFlips</h2>
      </button>
    </div>
  );
}
