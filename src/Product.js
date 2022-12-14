import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const addtoBasket = () => {
    //Add item to basket..
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <p>{title}</p>
      <p className="product_price">
        <small>₹</small>
        <strong>{price}</strong>
      </p>
      <div className="product_rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <p>⭐</p>
          ))}
      </div>
      <img src={image} alt="" />
      <button onClick={addtoBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
