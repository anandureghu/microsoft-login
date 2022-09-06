import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div
      className="
      flex justify-center items-center h-screen flex-col
    "
    >
      <p className="text-4xl font-bold">404</p>
      <p>page not found</p>
      <button
        className="
          py-1 px-5 m-3 border transition-all border-cyan-500 hover:rounded-md hover:bg-cyan-500 hover:text-slate-100"
        onClick={() => navigate(-1)}
      >
        go back
      </button>
    </div>
  );
};

export default NotFound;
