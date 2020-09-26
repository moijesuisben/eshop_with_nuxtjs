<template>
  <div class="flex justify-center">
    <h1 class="text-3xl font-medium mb-5">{{ content }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
  },
};
</script>