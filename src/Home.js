import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://m.media-amazon.com/images/I/51qBj3502YL._SX3000_.jpg"
        alt=""
      />
      {/* product id, title, price, rating, image*/}
      <div className="home_row">
        <Product
          id="12321340"
          title="Sony DualSense Wireless Controller for PlayStation 5 (White)"
          price={5098.0}
          rating={5}
          image=" https://m.media-amazon.com/images/I/71lkbBa83uL._SL1500_.jpg"
        />

        <Product
          id="12321341"
          title="OnePlus 80 cm (32 inches) Y Series LED Smart Android TV"
          price={14975.0}
          rating={2}
          image=" https://m.media-amazon.com/images/I/71d5fMDvq9L._SL1500_.jpg"
        />

        <Product
          id="12321342"
          title="Green Soul Involve Multi-Purpose Computer Table | Study Table | Office Table "
          price={7975.0}
          rating={4}
          image=" https://m.media-amazon.com/images/I/61Uuri4QvGL._SL1500_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12321341"
          title="OnePlus 80 cm (32 inches) Y Series LED Smart Android TV"
          price={14975.0}
          rating={2}
          image=" https://m.media-amazon.com/images/I/71d5fMDvq9L._SL1500_.jpg"
        />
        <Product
          id="12321341"
          title="OnePlus 80 cm (32 inches) Y Series LED Smart Android TV"
          price={14975.0}
          rating={2}
          image=" https://m.media-amazon.com/images/I/71d5fMDvq9L._SL1500_.jpg"
        />
        <Product
          id="12321341"
          title="OnePlus 80 cm (32 inches) Y Series LED Smart Android TV"
          price={14975.0}
          rating={2}
          image=" https://m.media-amazon.com/images/I/71d5fMDvq9L._SL1500_.jpg"
        />
        <Product
          id="12321341"
          title="OnePlus 80 cm (32 inches) Y Series LED Smart Android TV"
          price={14975.0}
          rating={2}
          image=" https://m.media-amazon.com/images/I/71d5fMDvq9L._SL1500_.jpg"
        />
      </div>
      {/*Product */}
    </div>
  );
}

export default Home;
