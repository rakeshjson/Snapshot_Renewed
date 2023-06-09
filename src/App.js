import "./App.css";
import React from "react";
import { Header } from "./components/Header";
import { cssLoader } from "./components/Header";
import FetchData from "./components/FetchData";

export const userContext = React.createContext();

function App() {
  return (
    <div className="App">
      <Header />
      <userContext.Provider value={cssLoader}>
        <FetchData />
      </userContext.Provider>
    </div>
  );
}

export default App;
