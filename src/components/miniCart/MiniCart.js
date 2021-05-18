import React from "react";
import { ShoppingBasket } from "@material-ui/icons";
import classes from "./MiniCart.module.css";
import { Badge } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MiniCart() {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={classes.miniCart}>
      <Link to="/cart">
        <Badge color="secondary" badgeContent={quantity}>
          <ShoppingBasket style={{ fontSize: 60 }} color="primary" />
        </Badge>
      </Link>
    </div>
  );
}

export default MiniCart;
