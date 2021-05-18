import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProductListing from "./components/productListing/ProductListing";
import ProductDetail from "./components/productDetail/ProductDetail";
import Cart from "./components/cart/Cart"
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <p>Home.....</p>
        </Route>
        <Route path="/products" exact>
          <ProductListing></ProductListing>
        </Route>
        <Route path="/products/:id">
          <ProductDetail></ProductDetail>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
