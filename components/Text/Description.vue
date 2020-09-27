<template>
  <div class="flex justify-center">
    <p class="w-2/4 text-center">{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
  },
};
</script>