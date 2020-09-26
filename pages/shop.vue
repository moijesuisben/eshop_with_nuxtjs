<template>
  <CardCollection :collections="collections" />
</template>

<script>
export default {
  data: function () {
    return {
      collections: [
        {
          url: "/collection1",
          name: "name collection1",
          desc: "lorem ipsum",
          tag1: "test",
          tag2: "hola",
          tag3: "hup",
        },
        {
          name: "name collection2",
          desc: "lorem ipsum",
          tag1: "test",
          tag2: "hola",
          tag3: "hup",
        },
        {
          name: "name collection2",
          desc: "lorem ipsum",
          tag1: "test",
          tag2: "hola",
          tag3: "hup",
        },
      ],
    };
  },
};
</script>