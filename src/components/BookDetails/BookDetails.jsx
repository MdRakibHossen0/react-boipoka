import React from "react";
import { useLoaderData, useParams } from "react-router";
 import { addToStoreDB } from "../../utility/addToDB";
 import Swal from "sweetalert2";
 import withReactContent from "sweetalert2-react-content";

 const MySwal = withReactContent(Swal);
  import { ToastContainer, toast } from "react-toastify";


const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  //Destructuring
  const {
    bookName,
    image,
    author,
    category,
    review,
    tags,
    totalPages,
    yearOfPublishing,
    rating,
    publisher,
  } = singleBook;
  console.log(singleBook) || {}
  // console.log(data)
  // console.log(typeof id,data)

  const handleMarkAsRead=(id)=>{
    // store with id
    // where to store
    // array or collection
    // if book already exist the show a alert
    // if book not exist then push in the collection or array



  // Swal.fire({
  //   title: "Add This Book!",
  //   icon: "success",
  //   draggable: true,
  // });
toast("Added this Book!");

    addToStoreDB(id);


  }
  return (
    <div className="card card-side bg-base-100 shadow-sm mx-auto gap-5">
      <figure>
        <img
          className="lg:w-[300px] lg:min-h-2/3 h-[200px] p-2 lg:p-10 bg-gray-100 rounded-xl"
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <div>
          <h2 className="card-title">{bookName}</h2>
          <ToastContainer />
          <p className="">By: {author}</p>
          <p className="divider"></p>
          <p className="lg:text-base">{category}</p>
          <p className="divider"></p>
        </div>
        <div>
          <p className="w-[200px] lg:w-[600px]  ">
            <span> Review:</span>
            {review}
          </p>
        </div>
        <div className="flex  text-teal-600 gap-6 lg:gap-10 flex-wrap">
          <h3 className="text-black text-start">Tag:</h3>
          {tags.map((tag, index) => (
            <button
              key={index}
              className=" rounded-full hover:bg-teal-100 transition"
            >
              {tag}
            </button>
          ))}
        </div>
        <p className="divider"></p>
        <div class="flex w-full flex-col lg:flex-row">
          <div class="card    rounded-box grid h-32   ">
            <p>Number of Pages:</p>
            <p>Publisher: </p>
            <p>Year of Publish: </p>
            <p>Rating: </p>
          </div>
          <div class="divider divider-horizontal divider-end"> </div>
          <div class="card font-bold  rounded-box grid h-32    ">
            <p> {totalPages}</p>
            <p> {publisher}</p>
            <p> {yearOfPublishing}</p>
            <p> {rating}</p>
          </div>
        </div>

        <div className="card-actions lg:justify-end  ">
          <button onClick={() => handleMarkAsRead(id)} className="btn  ">
            Mark as Read
          </button>
          <button className="btn btn-primary">Add to WishList</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
