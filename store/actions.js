import axios from "@nuxtjs/axios";

export const getProducts = ({ commit }) => {
  axios.get("http://http://127.0.0.1:3000/api/products").then(response => {
    commit("SET_PRODUCTS", response.data);
  });
};

export const getProduct = ({ commit }, productId) => {
  axios
    .get(`http://http://127.0.0.1:3000/api/products/${productId}`)
    .then(response => {
      commit("SET_PRODUCT", response.data);
    });
};

export const addProductToCart = ({ commit }, { product, quantity }) => {
  commit("ADD_TO_CART", { product, quantity });

//   axios.post("http://http://127.0.0.1:3000/api/cart", {
//     product_id: product._id,
//     quantity
//   });
// };

// export const getCartItems = ({ commit }) => {
//   axios.get("http://http://127.0.0.1:3000/api/cart").then(response => {
//     commit("SET_CART", response.data);
//   });
};

// export const removeProductToCart = ({ commit })