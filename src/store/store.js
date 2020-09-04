import Vue from 'vue';
import Vuex from 'vuex';

import { db } from '../firebaseConfig';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    alerts: [],
    stocks: [],
    userStocks: [],
  },
  getters: {
    getAlerts(state) {
      return state.alerts;
    },
    getStocks(state) {
      return state.stocks;
    },
    getUserStocks(state) {
      return state.userStocks;
    },
  },
  mutations: {
    addAlert(state, payload) {
      state.alerts.push(payload);
      setTimeout(() => {
        state.alerts.pop();
      }, payload.duration);
    },
    addStock(state, payload) {
      state.stocks.push(payload.stock);
    },
    fetchStocks(state, payload) {
      state.stocks = payload;
    },
  },
  actions: {
    addAlert({ commit }, payload) {
      commit('addAlert', payload);
    },
    addStock({ commit }, payload) {
      db.collection('stocks')
        .add(payload.stock)
        .then(() => commit('addStock', payload))
        .catch((err) => console.log(err));
    },
    updateStock({ commit }, payload) {
      db.collection('stocks')
        .doc(payload.id)
        .update();
    },
    fetchStocks({ commit }) {
      let currentStocks = [];
      db.collection('stocks')
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            const stock = {
              id: doc.id,
              name: doc.data().name,
              price: +doc.data().price,
              description: doc.data().description,
            };
            console.log(stock);
            currentStocks.push(stock);
          });
          commit('fetchStocks', currentStocks);
        })
        .catch((err) => console.log(err));
    },
  },
});
