export default {
  addProduct(context, payload) {
    context.commit('ADD_PRODUCT', payload);
  },
  clearProduct(context, payload) {
    context.commit('CLEAR_PRODUCT', payload);
  },
};
