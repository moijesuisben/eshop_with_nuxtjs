<template>
  <div class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <!-- <div
          class="p-4 md:w-1/3"
          v-for="product in products"
          :key="product.name"
        > -->
        <div
          class="p-4 md:w-1/3"
          v-for="product in product.products"
          :key="product.name"
        >
          <div
            class="h-full border-2 border-gray-200 rounded-lg overflow-hidden"
          >
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              src="https://dummyimage.com/720x400"
              alt="blog"
            />
            <div class="p-6">
              <h2
                class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 uppercase"
              >
                {{ product.name }}
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                {{ product.productName }}
              </h1>
              <p class="leading-relaxed mb-3">{{ product.price }}€</p>
              <div class="flex items-center flex-wrap">
                <nuxt-link
                  :to="product.url"
                  class="inline-block bg-gray-200 rounded-md px-4 py-1 text-sm font-semibold text-gray-700 mr-2 hover:bg-gray-400 md:mb-2 lg:mb-0"
                  >En savoir plus</nuxt-link
                >
                <nuxt-link
                  to="/product"
                  class="inline-block bg-gray-200 rounded-md px-4 py-1 text-sm font-semibold text-gray-700 mr-2 hover:bg-gray-400 md:mb-2 lg:mb-0"
                  >Ajouter au panier</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    collections() {
      return this.$store.state.collections.collections;
    },
    product() {
      return this.collections.find(
        (value) => value._id === this.$route.params.collection
      );
    },
  },
};
</script>
