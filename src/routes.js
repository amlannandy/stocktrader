import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/login/Login.vue';
import Register from './components/login/Register.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Admin from './components/admin/Admin.vue';
import Stocks from './components/stocks/Stocks.vue';
import AddNewStock from './components/admin/AddNewStock.vue';
import AllStocks from './components/admin/AllStocks.vue';
import AdminSettings from './components/admin/AdminSettings.vue';

import { auth } from './firebaseConfig';

Vue.use(VueRouter);

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
