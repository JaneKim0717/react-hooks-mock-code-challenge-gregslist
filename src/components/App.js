import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const API = "http://localhost:6001/listings"

function App() {

  const [listings, setListings] = useState([])

  useEffect(()=> {
    fetch(API)
    .then(response => response.json())
    .then(data => setListings(data))
  }, [])

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} />
    </div>
  );
}

export default App;