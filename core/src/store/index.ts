import Vue from 'vue'
import Vuex from 'vuex'
import storeService1 from 'service1/store'
import storeService2 from 'service2/store'

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
    storeService1,
    storeService2
  }
})
