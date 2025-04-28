import React from "react";
import bookImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-16 lg:min-h-screen rounded-lg  m-5 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bookImg} className="  sm:w-full rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mx-auto py-5  ">
           
            Books to freshen up your bookshelf
          </h1>

          <button className="btn btn-primary">View the list</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
