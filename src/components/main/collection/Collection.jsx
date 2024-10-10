import React from "react";
import "./Collection.css";
import CollectionData from "../../../data/Collection.json";

const Collection = () => {
  return (
    <div className="collection">
      <div className="title">
        <h2>{CollectionData.title.name}</h2>
      </div>
      <div className="box-container">
        {CollectionData.collections.map((collection, index) => (
          <div className="box" key={index}>
            <div className="image">
              <a href={collection.link}>
                <img
                  src={require(`../../../assets/${collection.image}`)}
                  alt={collection.title}
                  srcset=""
                />
              </a>
              <div className="icons">
                <div className="wishlist">
                  <a href={collection.wishlistLink}>
                    <i className="fa-regular fa-heart"></i>
                  </a>
                </div>
                <div className="compare">
                  <a href={collection.compareLink}>
                    <i className="fa-solid fa-code-compare"></i>
                  </a>
                </div>
              </div>
              <div className="actions">
                <div className="quickview">
                  <a href={collection.quickViewLink}>Quick View</a>
                </div>
                <div className="cart">
                  <a href={collection.cartLink}>Quick Shop</a>
                </div>
              </div>
            </div>
            <div className="info">
              <div className="name">
                <h3>
                  <a href={collection.link}>{collection.title}</a>
                </h3>
              </div>
              <div className="price">
                <h3>
                  <span>€ </span>
                  {collection.price}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
