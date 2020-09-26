<template>
  <div>
    <Title content="Nom de la collection" />
    <Description
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae
      ultricies metus. Sed at feugiat tellus. Morbi accumsan lacinia rutrum.
      Nunc cursus pellentesque velit eu cursus.s"
    />
    <CardProduct :products="products" />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      products: [
        {
          name: "test name",
          price: "pas chère",
        },
        {
          name: "test name",
          price: "pas chère",
        },
        {
          name: "test name",
          price: "pas chère",
        },
        {
          name: "test name",
          price: "pas chère",
        },
        {
          name: "test name",
          price: "pas chère",
        },
      ],
    };
  },
};
</script>