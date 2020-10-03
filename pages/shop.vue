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

/* xport default {
  data() {
    return {
      collections: [],
    };
  }, 
 async fetch() {
    this.collections = await this.$http.$get(
      "http://www.json-generator.com/api/json/get/bUNELgwamq?indent=2"
    );
    console.log("🔴 ici => ", this.collections);
  }, 
};*/
</script>