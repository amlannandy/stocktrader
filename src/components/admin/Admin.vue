<template>
  <div class="ml-5">
    <h1 class="display-4 text-muted mb-5">Admin Panel</h1>
    <div class="btn-group mb-5" role="group" aria-label="Basic example">
      <router-link
        tag="button"
        to="/admin"
        type="button"
        class="btn btn-outline-primary"
        active-class="active"
        exact
      >
        View All Stocks
      </router-link>
      <router-link
        tag="button"
        to="/admin/add-new-stock"
        type="button"
        class="btn btn-outline-success"
        active-class="active"
      >
        Add New Stock
      </router-link>
      <router-link
        tag="button"
        to="/admin/settings"
        type="button"
        class="btn btn-outline-warning"
        active-class="active"
      >
        Settings
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
