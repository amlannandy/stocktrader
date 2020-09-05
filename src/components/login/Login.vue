<template>
  <div class="form">
    <h3 class="display-4">Login</h3>
    <p class="lead">Login to start trading stocks</p>
    <div class="form-group">
      <input
        v-model="user.email"
        type="email"
        placeholder="Email"
        class="form-control form-control-lg"
      />
    </div>
    <div class="form-group">
      <input
        v-model="user.password"
        type="password"
        placeholder="Password"
        class="form-control form-control-lg"
      />
    </div>
    <button @click="login()" class="btn btn-primary btn-lg btn-block">Login</button>
    <button @click="goToRegister()" class="btn btn-primary btn-lg btn-block">Register Instead</button>
  </div>
</template>

<script>
import { auth } from "../../firebaseConfig";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    goToRegister() {
      this.$router.push({ name: "register" });
    },
    login() {
      auth
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.$store.dispatch({ type: "switchAuthStatus", status: true });
          this.$router.push("/");
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

<style scoped>
.form {
  width: 500px;
  height: 100vh;
}
</style>