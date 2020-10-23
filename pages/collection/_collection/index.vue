<template>
  <div>
    <Title />
    <Description />
    <CardProduct />
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