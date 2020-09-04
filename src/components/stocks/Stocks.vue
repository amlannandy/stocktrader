<template>
  <div>
    <h1 class="display-4 text-muted ml-5">Stocks</h1>
    <div class="row m-3">
      <stock v-for="(item, index) in items" :key="index" :stock="item"></stock>
    </div>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  components: {
    stock: Stock
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Jio",
          description:
            "Jio, is an Indian telecommunications company and a subsidiary of Jio Platforms, headquartered in Mumbai, Maharashtra.",
          price: 125
        },
        {
          id: 1,
          name: "Jio",
          description:
            "Jio, is an Indian telecommunications company and a subsidiary of Jio Platforms, headquartered in Mumbai, Maharashtra.",
          price: 125
        },
        {
          id: 1,
          name: "Jio",
          description:
            "Jio, is an Indian telecommunications company and a subsidiary of Jio Platforms, headquartered in Mumbai, Maharashtra.",
          price: 125
        },
        {
          id: 1,
          name: "Jio",
          description:
            "Jio, is an Indian telecommunications company and a subsidiary of Jio Platforms, headquartered in Mumbai, Maharashtra.",
          price: 125
        },
        {
          id: 1,
          name: "Jio",
          description:
            "Jio, is an Indian telecommunications company and a subsidiary of Jio Platforms, headquartered in Mumbai, Maharashtra.",
          price: 125
        },
        {
          id: 1,
          name: "Jio",
          description:
            "Jio, is an Indian telecommunications company and a subsidiary of Jio Platforms, headquartered in Mumbai, Maharashtra.",
          price: 125
        },
        {
          id: 1,
          name: "Jio",
          description:
            "Jio, is an Indian telecommunications company and a subsidiary of Jio Platforms, headquartered in Mumbai, Maharashtra.",
          price: 125
        }
      ]
    };
  }
};
</script>
