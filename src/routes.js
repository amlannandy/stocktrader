import Home from './components/Home.vue';

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

export const routes = [
  { path: '', name: 'home', component: Home },
  { path: '/portfolio', name: 'portfolio', component: Portfolio },
  { path: '/stocks', name: 'stocks', component: Stocks },
  {
    path: '/admin',
    component: Admin,
    children: [
      { path: '', name: 'admin-home', component: AllStocks },
      { path: 'add-new-stock', name: 'add-new-stock', component: AddNewStock },
      { path: 'settings', name: 'admin-settings', component: AdminSettings },
    ],
  },
];
