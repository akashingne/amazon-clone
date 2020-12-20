import React from "react";
import { useStateValue } from "../StateProvider";

import "./Checkout.css";
import Header from "./Header";
import ChekoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const checkoutAd =
  "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img className="checkout__ad" src={checkoutAd} alt="checkout ad" />

          {basket?.length === 0 ? (
            <div>
              <h2>Your Shopping Basket is empty</h2>
              <p>
                You have no items in your basket. To buy one or more items,
                click "Add to basket" next to the item.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout__title">Your Shopping Basket</h2>
              {basket.map((item) => (
                <ChekoutProduct
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
              ))}
            </div>
          )}
        </div>
        {basket.length > 0 && <Subtotal />}
      </div>
    </div>
  );
}

export default Checkout;
