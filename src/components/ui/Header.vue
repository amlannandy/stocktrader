<template>
  <div class="container mb-4">
    <ul class="nav nav-pills nav-fill py-4 justify-content-center">
      <li class="nav-item">
        <router-link
          class="nav-link text-dark"
          to="/"
          tag="a"
          active-class="active bg-dark"
          exact
        >
          Home
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link text-dark"
          to="/portfolio"
          tag="a"
          active-class="active bg-dark"
          exact
        >
          Portfolio
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link text-dark"
          to="/stocks"
          tag="a"
          active-class="active bg-dark"
        >
          Stocks
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link text-dark"
          to="/admin"
          tag="a"
          active-class="active bg-dark"
        >
          Admin
        </router-link>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle text-dark"
          data-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
          >Options</a
        >
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Save</a>
          <a class="dropdown-item" href="#">Load</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.active {
  color: #eeeeee !important;
}
.nav-link:focus {
  color: #eeeeee !important;
}
</style>
