<template>
  <div class="flex justify-center">
    <p class="w-2/4 text-center">{{ product && product.desc }}</p>
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
      // console.log(this.collections, this.$route.params.id);
      // console.log(
      //   this.collections.find((value) => value._id === this.$route.params.id)
      // );
      return this.collections.find(
        (value) => value._id === this.$route.params.id
      );
    },
  },
};
</script>