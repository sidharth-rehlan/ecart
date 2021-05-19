import React from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import {removeProductFromCart} from '../../store/cartReducer';

function Cart() {
  const productData = useSelector((state) => state.productList.entities);
  const productsInCart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  let productinCartObj = {};
  let productkeys = [];

  for (let key of productsInCart) {
    productinCartObj[key.productId] = key.quantity;
    productkeys.push(parseInt(key.productId));
  }

  let finalProducts = productData.filter((product) => {
    return productkeys.includes(product.id);
  });

  const onRemove = (id)=>{
    console.log(id);
    dispatch(removeProductFromCart({productId: id}));
  }

  const onEdit = (id)=>{
    console.log(id);
  }

  const productList = finalProducts.map((product) => {
    return (
      <li className={classes.cartItem} key={product.id}>
        <CartItem
          image={product.image}
          description={product.description}
          price={product.price}
          quantity={productinCartObj[product.id]}
          title={product.title}
          id={product.id}
          onRemove={onRemove}
          onEdit={onEdit}
        ></CartItem>
      </li>
    );
  });
  return <div>{productList}</div>;
}

export default Cart;
