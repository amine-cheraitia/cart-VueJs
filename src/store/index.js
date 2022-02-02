import { createStore } from 'vuex';
import productsModule from './modules/products.js';
import cartModule from './modules/cart.js';

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  getters: {
    isLoggedIn(context) {
      console.log(productsModule);
      console.log(context.isLoggedIn);
      return context.isLoggedIn;
    },
  },
});

export default store;
