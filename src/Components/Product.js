import React from "react";
import { useStateValue } from "../StateProvider";

import "./Product.css";

function Product({ id, title, price, rating, image }) {
  const [{}, dispatch] = useStateValue();

  const AddToBasket = () => {
    //Add item to basket...
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              // eslint-disable-next-line jsx-a11y/accessible-emoji
              <p key={_}>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="p1" />
      <button onClick={AddToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
