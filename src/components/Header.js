import React from "react";
import { useContext } from "react";

function cssLoader() {
  window.location.reload();
}

function Header() {
  return (
    <div>
      <div id="dots-main">
        <p id="dot1" className="dots"></p>
        <p id="dot2" className="dots"></p>
        <p id="dot3" className="dots"></p>
        <h1 id="snapshot-small">snapshot</h1>
        <article id="css-loader"></article>
      </div>
      <h1 id="heading">SNAPSHOT _ IMAGE GALLERY</h1>
    </div>
  );
}

export { Header, cssLoader };
