<template>
  <div>
    <h1 class="display-4 text-muted ml-5">Stocks</h1>
    <p class="lead text-muted ml-5">Buy and sell stocks. Maximize your profits!</p>
    <div class="row m-3">
      <stock v-for="(item, index) in getStocks" :key="index" :stock="item"></stock>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";
export default {
  components: {
    stock: Stock,
  },
  computed: {
    ...mapGetters(["getStocks"]),
  },
  created() {
    this.$store.dispatch({ type: "fetchStocks" });
  },
};
</script>
