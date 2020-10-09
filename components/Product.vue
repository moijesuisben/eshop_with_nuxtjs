<template>
  <section class="text-gray-700 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="https://dummyimage.com/496x496"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2
            class="text-sm title-font text-gray-500 tracking-widest uppercase"
          >
            {{ collection.name }}
          </h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
            {{ product.productName }}
          </h1>
          <div class="flex mb-4"></div>
          <p class="leading-relaxed">
            {{ product.desc }}
          </p>
          <div
            class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"
          >
            <div class="flex items-center" v-if="product.size === true">
              <span class="mr-3">Size</span>
              <div class="relative">
                <select
                  class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-indigo-500 text-base pl-3 pr-10"
                >
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                <span
                  class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900"
              >{{product.price}} €</span
            >
            <button
              class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
console.log("☸ Hello 🐋");
import { mapMutations } from "vuex";
export default {
  computed: {
    collection() {
      return this.$store.state.collections.collections.find(
        (value) => value._id === this.$route.params.collection
      );
    },
    product() {
      // console.log(
      //   this.collections.find((value) => value._id === this.$route.params.id)
      // );
      console.log("azsdvft =>", this.$route.params);
      return (
        this.collection &&
        this.collection.products.find(
          (value) => value._id === this.$route.params.id
        )
      );
    },
  },
};

// console.log("🐖 collections => ", collections);
// console.log("🎠 product => ", product);
</script>