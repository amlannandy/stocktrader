<template>
  <div id="app">
    <custom-header v-if="getAuthStatus"></custom-header>
    <div class="container">
      <custom-alert></custom-alert>
      <div class="row">
        <div class="col-xs-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "./components/ui/Header.vue";
import Alert from "./components/ui/Alert.vue";
export default {
  components: {
    "custom-alert": Alert,
    "custom-header": Header,
  },
  computed: {
    ...mapGetters(["getAuthStatus"]),
  },
};
</script>

<style></style>
