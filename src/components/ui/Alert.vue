<template>
  <div>
    <div
      v-for="(alert, index) in getAlerts"
      v-bind:key="index"
      :class="'alert ' + alert.style"
      alert.style
      role="alert"
    >{{alert.message}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getAlerts"]),
  },
};
</script>
