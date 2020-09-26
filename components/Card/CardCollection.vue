<template>
  <ul>
    <li
      v-for="collection in collections"
      :key="collection.name"
      style="list-style: none"
    >
      <nuxt-link to="/collection1">
        <div class="mb-12">
          <div class="max-w-full rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="../../assets/img/ocean-banner.jpg"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{ collection.name }}</div>
              <p class="text-gray-700 text-base">
                {{ collection.desc }}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >#{{ collection.tag1 }}</span
              >
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >#{{ collection.tag2 }}</span
              >
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >#{{ collection.tag3 }}</span
              >
            </div>
          </div>
        </div>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    collections: Array,
  },
};
</script>