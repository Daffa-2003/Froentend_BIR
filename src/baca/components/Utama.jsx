// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import axios from "axios";
import { Link } from "react-router-dom";
// eslint-disable-next-line react-refresh/only-export-components

export const Utama = () => {
  const [book, setBook] = useState([]);

  const getBook = async () => {
    try {
      const response = await axios.get("http://localhost:8080/books");
      setBook(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getBook();
  }, []);
  const search = async (value) => {
    try {
      const response = await axios.get(`http://localhost:8080/books/search?query=${value}`);
      if (response.data === null) {
        setBook([]);
      } else {
        setBook(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className=" h-full py-20 px-7 flex flex-row bg-hijau">
      <div className="w-full h-full  p-4 bg-hijau align-middle flex justify-center flex-col">
        <div className="input-wrapper  p-2 rounded-lg flex w-full justify-center">
          <div className="border-2 p-2 rounded-lg border-green-950">
            <SearchIcon className="text-4xl" style={{ color: "black" }} />
            <input placeholder="Type to search..." className="text-white outline-none bg-transparent " onChange={(e) => search(e.target.value)} style={{ border: "none", color: "black " }} />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {book.length === 0 && <h1 className="p-30vh text-white text-2xl">No Book Found</h1>}
          {book.map((book) => (
            <div
              key={book.bookid}
              className="card w-64 bg-base-100 shadow-xl m-4 cursor-pointer transition duration-300 ease-in-out transform"
              style={{
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                transition: "box-shadow 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = "0px 0px 20px 10px rgba(0, 0, 0, 0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = "0px 0px 8px rgba(0, 0, 0, 0.3)";
              }}
            >
              <figure className=" w-full  overflow-hidden h-80">
                <img src={`http://localhost:8080/uploads/${book.image}`} alt="" className="object-cover w-full h-full object-top" />
              </figure>
              <div className="card-body  bg-white-A700 h-72">
                {" "}
                {/* Adjust the height as needed */}
                <h1 className="text-lg font-bold">{book.title}</h1>
                <div className="max-h-32 overflow-y-auto ">
                  {" "}
                  {/* Set a maximum height and make it scrollable */}
                  <p className="text-sm break-words text-wrap text-justify">{book.summary}</p>
                </div>
                <div className="card-actions absolute bottom-0 right-0">
                  <Link to={`/books/${book.bookid}/pages`} className="border-2 border-hijauCustom text-hijauCustom mb-6 mr-6  text-center font-bold hover:border-hijauCustom hover:bg-hijauCustom hover:text-white-A700 rounded-lg p-2 text-sm">
                    Page
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
