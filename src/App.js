import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProductListing from "./components/productListing/ProductListing";
import ProductDetail from "./components/productDetail/ProductDetail";
import Cart from "./components/cart/Cart";
import Profile from "./components/profile/Profile";
import { Route, Switch } from "react-router-dom";
import ColorForm from "./components/profile/form/ColorForm";
import Users from "./components/users/Users";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
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
          <Route path="/profile">
            <Profile></Profile>
          </Route>
          <Route path="/colorForm">
            <ColorForm></ColorForm>
          </Route>
          <Route path="/users">
            <Users></Users>
          </Route>
        </Switch>
      </main>
      <Footer>Footer</Footer>
    </div>
  );
}

export default App;
