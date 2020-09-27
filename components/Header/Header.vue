<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-indigo-500 p-6 mb-6"
  >
    <nuxt-link
      to="/shop"
      class="flex items-center flex-shrink-0 text-white mr-6"
    >
      <LogoSmall />
      <span class="font-semibold text-xl tracking-tight">eshop-nuxtjs</span>
    </nuxt-link>
    <!-- <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div> -->
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <nuxt-link
          to="/shop"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >Le shop</nuxt-link
        >
        <nuxt-link
          to="/account"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >Mon Compte</nuxt-link
        >
        <nuxt-link
          to="/blog"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >Blog</nuxt-link
        >
        <nuxt-link
          to="/help"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >Besoin d'aide ?</nuxt-link
        >
      </div>
      <div>
        <!-- <a
          href="#"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >Accéder au panier</a
        > -->
        <nuxt-link
          to="/shopping-cart"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          Accéder au panier
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>