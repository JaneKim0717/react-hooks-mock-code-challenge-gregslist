import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDeleteCard }) {
  


  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => 
          <ListingCard 
            key={listing.id} 
            listing={listing} 
            handleDeleteCard={handleDeleteCard}
        />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;