import React, { Component } from "react";
import PropTypes from "prop-types";
import "./scss/productCard.scss";

class ProductCard extends Component {
  handleAddToCart = () => {
    const { product, onAddToCart } = this.props;
    onAddToCart(product);
  };

  handleAddToFavorites = () => {
    const { product, onAddToFavorites } = this.props;
    onAddToFavorites(product);
  };

  render() {
    const { product, isFavorite } = this.props;
    return (
      <div className="product-card">
        <img src={product.imagePath} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={this.handleAddToCart}>Add to Cart</button>
        <i
          className={`fa fa-star${isFavorite ? " active" : ""}`}
          onClick={this.handleAddToFavorites}
        />
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onAddToFavorites: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

ProductCard.defaultProps = {
    isFavorite: false,
  };
  

export default ProductCard;
