import React, { useEffect, useState, createContext, useContext } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import axios from "axios";
import { userContext } from "../App";

function FetchData() {
  const [searchText, setSearchText] = useState("Nature");
  const [images, setImages] = useState([]);
  const cssLoader = useContext(userContext);
  // console.log(cssLoader);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.flickr.com/services/rest/",
          {
            params: {
              method: "flickr.photos.search",
              api_key: "ea8c4df47fa78e566c7de3052ccf88fb",
              text: searchText,
              sort: "interestingness-desc",
              format: "json",
              nojsoncallback: 1,
            },
          }
          // 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ad3b7bf5c2f7b26a20ff5a3cd6fb84f&text=cars&format=json&nojsoncallback=1'
        );
        setImages(response.data.photos.photo);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchText]);

  return (
    <div>
      <div>
        <section className="section1">
          <input
            id="input"
            type="text"
            placeholder="Search images &nbsp; Eg: nature, flowers, cars"
          />
          {/* {console.log(document.getElementById('input').value)} */}
          <button
            id="search"
            onClick={(e) => {
              setSearchText(document.getElementById("input").value);
              cssLoader();
            }}
          >
            Search
          </button>
        </section>

        <section id="section2">
          <BrowserRouter>
            <nav id="nav-bar">
              <Link
                className="link"
                to={"/Mountains"}
                onClick={() => {
                  setSearchText("Mountains");
                  cssLoader();
                }}
              >
                Mountains
              </Link>
              <Link
                className="link"
                to={"/Beaches"}
                onClick={() => {
                  setSearchText("Beaches");
                  cssLoader();
                }}
              >
                Beaches
              </Link>
              <Link
                className="link"
                to={"/Birds"}
                onClick={() => {
                  setSearchText("Birds");
                  cssLoader();
                }}
              >
                Birds
              </Link>
              <Link
                className="link"
                to={"/Food"}
                onClick={() => {
                  setSearchText("Food");
                  cssLoader();
                }}
              >
                Food
              </Link>
            </nav>
          </BrowserRouter>
        </section>
      </div>
      <div id="display-gallery">
        {images.map((image) => (
          <img
            id="images"
            key={image.id}
            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
            alt={image.title}
          />
        ))}
      </div>
    </div>
  );
}

export default FetchData;
