<template>
  <div>
    <h1>Portfolio</h1>
    <button class="btn btn-danger" @click="logOut()">Log out</button>
  </div>
</template>

<script>
import { auth } from "../../firebaseConfig";
export default {
  methods: {
    logOut() {
      auth
        .signOut()
        .then(() => {
          this.$store.dispatch({ type: "switchAuthStatus", status: false });
          this.$router.push("/login");
        })
        .catch((err) => {
          this.$store.dispatch({
            type: "addAlert",
            message: err.message,
            duration: 3000,
            style: "alert-danger",
          });
        });
    },
  },
};
</script>
