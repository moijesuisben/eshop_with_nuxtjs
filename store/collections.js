export const state = () => ({
  collections: require("./collections.json")
});

export const mutations = {
  add(state, collection) {
    state.collections.push({
      _id,
      index,
      url,
      picture,
      name,
      desc,
      tag1,
      tag2,
      tag3
    });
  },
  remove() {},
  toggle() {}
};
