import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
          alt=""
        />
      </Link>

      {/* Search box */}
      <div className="header_search">
        <input type="text" className="header_searchinput" />
        <SearchIcon className="header_searchicon" />
      </div>

      {/* 2 links */}
      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionlineone">Hello</span>
            <span className="headeroptionlinetwo">Sign In</span>
          </div>
        </Link>

        <Link to="/orders" className="header_link">
          <div className="header_option">
            <span className="header_optionlineone">Returns</span>
            <span className="headeroptionlinetwo">&Orders</span>
          </div>
        </Link>

        {/*Basket number with number of items  */}
        <Link to="/checkout" className="header_link">
          <div className="header_shoppingbasketicon">
            <ShoppingBasketIcon />
            <span className="header_basketcount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
