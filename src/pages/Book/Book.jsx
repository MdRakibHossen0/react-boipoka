import React, { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  // const data = use(bookPromise);
  // console.log(data)
  // console.log(singleBook);
  const {
    bookId,
    category,
    image,
    publisher,
    rating,
    tags,
    yearOfPublishing,
  } = singleBook;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-full mx-auto shadow-lg border p-6  ">
        <figure className="p-5 bg-gray-100 w-2/3 mx-auto rounded-2xl">
          <img className="h-[166px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          {/* tags array thats why only tags maps */}
          <div className="flex justify-center text-teal-600 gap-6 lg:gap-10">
            {tags.map((tag,index) => (
              <button key={index}>{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {singleBook.bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>By: {publisher}</p>
          <div className=" border-t-1 lg:border-t-2 border-dashed text-gray-400"></div>
          <div className="card-actions justify-between ">
            <div className="badge  ">{category}</div>
            <div className="badge  ">
              {rating}
              <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
