import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART} from '../Constants';

const cartItems = (productsCart = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newProductId = action.payload.product._id.$oid;
      const repeatedProduct = productsCart.find(productCart => {
        if (productCart.product._id.$oid === newProductId) {
          productCart.product.quantity += action.payload.product.quantity;
          return true;
        }
      });
      if (repeatedProduct) {
        return [...productsCart];
      }
      return [...productsCart, action.payload];
    case REMOVE_FROM_CART:
      return productsCart.filter(cartItem => cartItem !== action.payload);
    case CLEAR_CART:
      return (productsCart = []);
  }
  return productsCart;
};

export default cartItems;
