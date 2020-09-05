import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/login/Login.vue';
import Register from './components/login/Register.vue';

import { auth } from './firebaseConfig';

Vue.use(VueRouter);

const Portfolio = (resolve) => {
  require.ensure(['./components/portfolio/Portfolio.vue'], () => {
    resolve(require('./components/portfolio/Portfolio.vue'));
  });
};

const Stocks = (resolve) => {
  require.ensure(['./components/stocks/Stocks.vue'], () => {
    resolve(require('./components/stocks/Stocks.vue'));
  });
};

const Admin = (resolve) => {
  require.ensure(['./components/admin/Admin.vue'], () => {
    resolve(require('./components/admin/Admin.vue'));
  });
};

const AddNewStock = (resolve) => {
  require.ensure(['./components/admin/AddNewStock.vue'], () => {
    resolve(require('./components/admin/AddNewStock.vue'));
  });
};

const AllStocks = (resolve) => {
  require.ensure(['./components/admin/AllStocks.vue'], () => {
    resolve(require('./components/admin/AllStocks.vue'));
  });
};

const AdminSettings = (resolve) => {
  require.ensure(['./components/admin/AdminSettings.vue'], () => {
    resolve(require('./components/admin/AdminSettings.vue'));
  });
};

const routes = [
  { path: '', name: 'home', component: Home, meta: { requiresAuth: true } },
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
    meta: { requiresAuth: true },
  },
  { path: '/stocks', name: 'stocks', component: Stocks },
  {
    path: '/admin',
    component: Admin,
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'admin-home', component: AllStocks },
      { path: 'add-new-stock', name: 'add-new-stock', component: AddNewStock },
      { path: 'settings', name: 'admin-settings', component: AdminSettings },
    ],
  },
];

const router = new VueRouter({
  routes: routes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  if (requiresAuth && !auth.currentUser) {
    next('/login');
  } else {
    next();
  }
});

export default router;
