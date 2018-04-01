import Vue from 'vue';
import Vuex from 'vuex';

import App from './App.vue';

import { state, mutations, actions, getters } from './store';

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
