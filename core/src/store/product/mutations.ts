export default {
  ADD_PRODUCT(state:any, data: any) {
    state.list.push({name: data.name, description: data.description});
  },
  CLEAR_PRODUCT(state: any) {
    state.list = [];
  },
};
