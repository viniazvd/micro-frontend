import Vue from 'vue'
import Vuex from 'vuex'
import storeOnboarding from 'onboarding/store'
import storeForgotPassword from 'forgotPassword/store'

Vue.use(Vuex)

const storeCore = {
  namespace: true,

  state: {
    core: []
  }
}

export default new Vuex.Store({
  modules: {
    storeCore,
    storeOnboarding,
    storeForgotPassword
  }
})
