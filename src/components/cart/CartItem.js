import React from "react";
import classes from "./CartItem.module.css";
import { Button } from "@material-ui/core";

function CartItem(props) {
  const { image, title, price, quantity, description, onRemove, onEdit, id } =
    props;


    const removeButtonHandler = (e)=>{
        onRemove(id);
    }

    const editButtonHandler = (e)=>{
        onEdit(id);
    }
  return (
    <>
      <img className={classes.image} src={image} alt={title}></img>
      <span className={classes.description}>{description}</span>
      <span className={classes.price}>{price}</span>

      <span className={classes.quantity}>{quantity}</span>
      <span className={classes.removeButton}>
        <Button variant="contained" color="secondary" onClick={removeButtonHandler}>
          Remove
        </Button>
      </span>
      <span className={classes.editButton}>
        <Button
          className={classes.editButton}
          variant="contained"
          color="primary"
          onClick={editButtonHandler}
        >
          Edit
        </Button>
      </span>
    </>
  );
}

export default CartItem;
