<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg my-5">
    <img
      class="w-full"
      src="../../assets/img/sky.jpg"
      alt="Sunset in the mountains"
    />
    <div class="px-6 py-4">
      <div class="font-medium text-xl mb-2">Nom du produit</div>
      <div class="font-bold text-xl mb-2">Prix</div>
    </div>
    <div class="px-6 pb-2">
      <nuxt-link
        to="/shop"
        class="inline-block bg-gray-200 rounded-md px-4 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-400"
        >En savoir plus</nuxt-link
      >
      <nuxt-link
        to="/shop"
        class="inline-block bg-gray-200 rounded-md px-4 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-400"
        >Ajouter au panier</nuxt-link
      >
    </div>
  </div>
</template>