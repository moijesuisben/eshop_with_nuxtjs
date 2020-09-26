<template>
  <!-- <ul class="flex flex-row justify-evenly flex-wrap"> -->
  <ul class="flex flex-row flex-wrap pl-16">
    <li
      v-for="product in products"
      :key="product.name"
      style="list-style: none"
      class="max-w-sm rounded overflow-hidden shadow-lg my-5 mr-12"
    >
      <img
        class="w-full"
        src="../../assets/img/sky.jpg"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-medium text-xl mb-2">{{ product.name }}</div>
        <div class="font-bold text-xl mb-2">{{ product.price }}</div>
      </div>
      <div class="px-6 pb-2">
        <nuxt-link
          to="/product"
          class="inline-block bg-gray-200 rounded-md px-4 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-400"
          >En savoir plus</nuxt-link
        >
        <nuxt-link
          to="/product"
          class="inline-block bg-gray-200 rounded-md px-4 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-400"
          >Ajouter au panier</nuxt-link
        >
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    products: Array,
  },
};
</script>