export default {
  addProduct(context: any, payload: any) {
    context.commit('ADD_PRODUCT', payload);
  },
  clearProduct(context:any, payload: any) {
    context.commit('CLEAR_PRODUCT', payload);
  },
};
