export default {
  ADD_PRODUCT(state, {name, description } = data) {
    state.list.push({name: name, description: description});
  },
  CLEAR_PRODUCT(state) {
    state.list = [];
  },
};
