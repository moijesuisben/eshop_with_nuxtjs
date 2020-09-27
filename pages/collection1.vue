<template>
  <div>
    <!-- <div>
    <Title content="Nom de la collection" />
    <Description
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae
      ultricies metus. Sed at feugiat tellus. Morbi accumsan lacinia rutrum.
      Nunc cursus pellentesque velit eu cursus.s"
    />
    <CardProduct :products="products" />
  </div> -->
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
          brand: "brand",
          name: "name",
          desc:
            "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat",
        },
        {
          brand: "brand",
          name: "name",
          desc:
            "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat",
        },
        {
          brand: "brand",
          name: "name",
          desc:
            "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat",
        },
        {
          brand: "brand",
          name: "name",
          desc:
            "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat",
        },
        {
          brand: "brand",
          name: "name",
          desc:
            "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat",
        },
        {
          brand: "brand",
          name: "name",
          desc:
            "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat",
        },
      ],
    };
  },
};
</script>