import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import user from './user'
import tyres from './tyres'
import cart from './cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,user, tyres, cart
  }
})
