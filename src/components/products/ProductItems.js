import classes from "./ProductItems.module.css";
import Product from "./Product";

function ProductItems(props) {

  let content = "";
  if (props.productData && props.productData.length > 0) {
    content = props.productData.map((product) => {
      return (
        <li className={classes.productItem} key={product.id}>
            <Product productInfo = {product}></Product>
        </li>
      );
    });
  }
  return <>{content}</>;
}

export default ProductItems;
