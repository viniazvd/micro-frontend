import Vue from 'vue'
import Vuex from 'vuex'
import product from './product/index'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product,
  },
});
