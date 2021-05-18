import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const productData = useSelector((state) => state.productList.entities);

  console.log(productData);

  const productsInCart = useSelector((state) => state.cart.products);
  console.log(productsInCart);

  let productinCartObj = {};
  let productkeys = [];

  for (let key of productsInCart) {
    productinCartObj[key.productId] = key.quantity;
    productkeys.push(parseInt(key.productId));
  }

 // let productKeys = Object.keys(productinCartObj);

  let finalProducts = productData.filter((product) => {
    return productkeys.includes(product.id);
  });

  console.log(finalProducts);

  const productList = finalProducts.map((product) => {
    return (
      <li key={product.id}>
        <div>
          <img src={product.image} alt={product.title}></img>
          <span>{product.description}</span>
          <span>{product.price}</span>
          <span>Quantity: {productinCartObj[product.id]}</span>
        </div>
        <div>
          <span>Remove</span>
          <span>Edit</span>
        </div>
      </li>
    );
  });
  return <div>{productList}</div>;
}

export default Cart;
