import React, { useRef } from "react";
import { Button, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import classes from "./Product.module.css";
import { useDispatch } from "react-redux";
import {addProductToCart} from '../../store/cartReducer';

function Product(props) {
  const quantityRef = useRef();

  const { id, image, title, price } = props.productInfo;
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    //   const quantity = quantityRef.current.value;
    dispatch(addProductToCart(
      { 
        quantity: parseInt(quantityRef.current.value), 
        productId: id, 
        price: price 
      }
      ));
    
  };

  return (
    <>
      <Card variant="outlined" className={classes.card}>
        <Link to={`/products/${id}`}>
          <img src={image} alt={title} />
        </Link>
        <p>{price}</p>
        <form onSubmit={onFormSubmit}>
          <select name="quantity" ref={quantityRef}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <Button variant="outlined" type="submit">
            Add to cart
          </Button>
        </form>
      </Card>
    </>
  );
}

export default Product;
