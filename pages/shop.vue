<template>
  <CardCollection :collections="collections" />
</template>

<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    collections() {
      return this.$store.state.collections.collections;
    },
  },
};
</script>