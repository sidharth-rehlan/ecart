import React, {useEffect } from "react";
import ProductItems from "../products/ProductItems";
import classes from "./ProductListing.module.css";
import { CircularProgress } from "@material-ui/core";
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductList} from '../../store/productListReducer';

function ProductListing() {
  const dispatch = useDispatch();
  const productData = useSelector(state => state.productList.entities);
  useEffect(() => {
   dispatch(fetchProductList());
  }, []);

  return (
    <>
      <ul className={classes.productList}>
           <ProductItems productData={productData} />
         </ul>
    </>
  );
}

export default ProductListing;
