<template>
  <div class="flex justify-center my-6">
    <div
      class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5"
    >
      <div class="flex-1">
        <table class="w-full text-sm lg:text-base" cellspacing="0">
          <thead>
            <tr class="h-12 uppercase">
              <th class="hidden md:table-cell"></th>
              <th class="text-left">Produit</th>
              <th class="lg:text-right text-left pl-5 lg:pl-0">
                <span class="hidden lg:inline">Quantité</span>
              </th>
              <th class="hidden text-right md:table-cell">Prix à l'unité</th>
              <th class="text-right">Prix total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.product.id">
              <!-- IMAGE -->
              <td class="hidden pb-4 md:table-cell">
                <a href="#">
                  <img
                    src="https://dummyimage.com/80x80"
                    class="w-20 rounded"
                    alt="Thumbnail"
                  />
                </a>
              </td>
              <!-- FIN IMAGE -->
              <!-- PRODUCT NAME -->
              <td>
                <p class="mb-2">{{ item.product.productName }}</p>
                <button @click="removeProduct(product)" class="text-gray-700">
                  <small>(Remove item)</small>
                </button>
              </td>
              <!-- FIN PRODUCT NAME -->
              <!-- QUANTITY -->
              <td class="justify-center md:justify-end md:flex md:mt-8">
                <div class="w-20 h-10 text-right">
                  <span class="text-sm lg:text-base font-medium">{{
                    item.quantity
                  }}</span>
                </div>
              </td>
              <!-- FIN QUANTITY -->
              <!-- PRIX UNITAIRE-->
              <td class="hidden text-right md:table-cell">
                <span class="text-sm lg:text-base font-medium"
                  >{{ item.product.price }} €</span
                >
              </td>
              <!-- FIN PRIX UNITAIRE -->
              <!-- PRIX TOTAL -->
              <td class="text-right">
                <span class="text-sm lg:text-base font-medium"
                  >{{ item.quantity * item.product.price }} €</span
                >
              </td>
              <!-- FIN PRIX TOTAL -->
            </tr>
          </tbody>
        </table>
        <hr class="pb-6 mt-6" />
        <div class="my-4 mt-6 -mx-2 flex-col items-end lg:flex">
          <div class="flex pt-4 border-b">
            <div
              class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800"
            >
              Total
            </div>
            <div
              class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900"
            >
              {{ cartTotalPrice }} €
            </div>
          </div>
          <a href="#">
            <button
              class="flex justify-center w-50 px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none"
            >
              <svg
                aria-hidden="true"
                data-prefix="far"
                data-icon="credit-card"
                class="w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                />
              </svg>
              <span class="ml-2 mt-5px">Procceed to checkout</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart(product) {
      return this.$store.state.cart;
    },
    cartTotalPrice(product) {
      return this.$store.getters.cartTotalPrice;
    },
  },

  methods: {
    removeProduct(product) {
      this.$store.dispatch("removeProductToCart", {
        product: product,
        quantity: -1,
      });
    },
  },
};
</script>