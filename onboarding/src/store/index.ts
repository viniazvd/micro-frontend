const storeOnboarding = {
  namespace: true,

  state: {
    service1: 1
  },

  mutations: {
    increment (state: any) {
      state.service1++
    }
  },

  actions: {
    increment (context: any) {
      context.commit('increment')
    }
  }
}

export default storeOnboarding
