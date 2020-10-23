export const SET_PRODUCTS = (state, products) => {
  state.products = products;
};

export const SET_PRODUCT = (state, product) => {
  state.product = product;
};

export const ADD_TO_CART = (state, { product, quantity }) => {
  let productInCart = state.cart.find(item => {
    return item.product._id === product._id;
  });

  if (productInCart) {
    productInCart.quantity += quantity;
    return;
  }

  state.cart.push({
    product,
    quantity
  });
};

// export const REMOVE_TO_CART = (state, {product, quantity}) => {
//   let
// };
