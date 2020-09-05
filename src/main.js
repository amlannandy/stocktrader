import Vue from 'vue';

import App from './App.vue';
import router from './routes';
import { store } from './store/store';
import { auth } from './firebaseConfig';

let app;
auth.onAuthStateChanged((user) => {
  store.state.isAuthenticated = user !== null;
  if (!app) {
    app = new Vue({
      render: (h) => h(App),
      router: router,
      store: store,
    }).$mount('#app');
  }
});
