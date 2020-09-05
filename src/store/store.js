import Vue from 'vue';
import Vuex from 'vuex';

import { db } from '../firebaseConfig';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    alerts: [],
    stocks: [],
    userStocks: [],
    isAuthenticated: false,
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
    getAuthStatus(state) {
      return state.isAuthenticated;
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
      //state.stocks.push(payload);
    },
    updateStock(state, payload) {},
    fetchStocks(state, payload) {
      state.stocks = payload;
    },
    deleteStock(state, payload) {
      state.stocks = state.stocks.filter((st) => st.id != payload);
    },
    switchAuthStatus(state, payload) {
      state.isAuthenticated = payload;
    },
  },
  actions: {
    switchAuthStatus({ commit }, payload) {
      commit('switchAuthStatus', payload.status);
    },
    addAlert({ commit }, payload) {
      commit('addAlert', payload);
    },
    addStock({ commit }, payload) {
      db.collection('stocks')
        .add(payload.stock)
        .then(() => commit('addStock', payload.stock))
        .catch((err) => console.log(err));
    },
    updateStock({ commit }, payload) {
      db.collection('stocks')
        .doc(payload.stock.id)
        .update({
          description: payload.stock.description,
          price: +payload.stock.price,
        })
        .then(() => commit('updateStock', payload.stock))
        .catch((err) => console.log(err));
    },
    deleteStock({ commit }, payload) {
      db.collection('stocks')
        .doc(payload.id)
        .delete()
        .then(() => {
          commit('deleteStock', payload.id);
          commit('addAlert', {
            message: 'Stock updated',
            duration: 3000,
            style: 'alert-success',
          });
        })
        .catch((err) => console.log(err));
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
            currentStocks.push(stock);
          });
          commit('fetchStocks', currentStocks);
        })
        .catch((err) => console.log(err));
    },
  },
});
