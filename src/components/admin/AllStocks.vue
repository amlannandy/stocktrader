<template>
  <div>
    <p class="lead">All Stocks</p>
    <single-stock v-for="(stock, index) in getStocks" v-bind:key="index" :data="stock"></single-stock>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";
export default {
  components: {
    "single-stock": Stock,
  },
  computed: {
    ...mapGetters(["getStocks"]),
  },
  created() {
    this.$store.dispatch({ type: "fetchStocks" });
  },
};
</script>
