import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const API = "http://localhost:6001/listings"

function App() {

  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=> {
    fetch(API)
    .then(response => response.json())
    .then(data => setListings(data))
  }, [])

  const filteredListings = listings.filter((listing) => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  function handleDeleteCard(id) {
  const updatedListingsArray = listings.filter((listing) => listing.id !== id)
    setListings(updatedListingsArray)
  }

  return (
    <div className="app">
      <Header handleSearch = {setSearch}/>
      <ListingsContainer 
        listings={filteredListings} 
        handleDeleteCard={handleDeleteCard}/>
    </div>
  );
}

export default App;