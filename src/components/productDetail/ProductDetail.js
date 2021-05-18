import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./ProductDetail.module.css";
import { CircularProgress } from "@material-ui/core";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let content = "";

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (response.ok != true) {
        throw { error: "Failed to load product" };
      }
      const productData = await response.json();

      setProduct(productData);
      setLoading(false);
    } catch (error) {
      setError(error.error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (error && loading) {
    content = <p>{error}</p>;
  } else if (loading) {
    content = <CircularProgress />;
  } else if (product) {
    content = product && (
      <>
        <img src={product.image} alt={product.title} />
        <p>{product.price}</p>
      </>
    );
  } else {
    content = <p>No product found</p>;
  }

  return <div className={classes.productDetail}>{content}</div>;
}

export default ProductDetail;
