<template>
  <header class="text-gray-700 body-font">
    <div
      class="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <nuxt-link
        to="/shop"
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <LogoSmall />
        <span class="font-semibold text-xl tracking-tight">eshop-nuxtjs</span>
      </nuxt-link>
      <nav
        class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
      >
        <nuxt-link to="/shop" class="mr-5 hover:text-gray-900"
          >Le shop</nuxt-link
        >
        <nuxt-link to="/account" class="mr-5 hover:text-gray-900"
          >Mon Compte</nuxt-link
        >
        <nuxt-link to="/blog" class="mr-5 hover:text-gray-900">Blog</nuxt-link>
        <nuxt-link to="/help" class="mr-5 hover:text-gray-900"
          >Besoin d'aide</nuxt-link
        >
      </nav>
      <nuxt-link
        to="/shopping-cart"
        class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
      >
        <div v-if="cartItemCount === 0">Accéder au panier</div>
        <div v-if="cartItemCount === 1">
          Accéder au panier ({{ cartItemCount }} article)
        </div>
        <div v-if="cartItemCount > 1">
          Accéder au panier ({{ cartItemCount }} articles)
        </div>
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
};
</script>