import React, { useState } from "react";

function ListingCard( {listing} ) {

  const [isFavorited, setFavorited] =useState(false)

  const {id, image, description, location} = listing

  function handleDeleteCard() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then((response) => response.json())
    .then(() => {
      
    })
  }



  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={() => setFavorited(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFavorited(true)}className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteCard} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;