import React, { useState, useEffect } from "react";
import "./App.scss";
import Button from "./Button";
import Modal from "./Modal";
import ProductCard from "./productCard";
import productsData from "./products.json";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const handleAddToFavorites = (product) => {
    const isAlreadyInFavorites = favoriteItems.some((item) => item.sku === product.sku);
  
    if (isAlreadyInFavorites) {
      setFavoriteItems((prevFavoriteItems) =>
        prevFavoriteItems.filter((item) => item.sku !== product.sku)
      );
    } else {
      setFavoriteItems((prevFavoriteItems) => [...prevFavoriteItems, product]);
    }
  };
  

  return (
    <div className="App">
      <div className="header">
        <div className="cart-icon">
          <i className="fa fa-shopping-cart" />
          <span>{cartItems.length}</span>
        </div>
        <div className="favorite-icon">
          <i className="fa fa-star" />
          <span>{favoriteItems.length}</span>
        </div>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.sku}
            product={product}
            onAddToCart={handleAddToCart}
            onAddToFavorites={handleAddToFavorites}
            isFavorite={favoriteItems.some((item) => item.sku === product.sku)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
