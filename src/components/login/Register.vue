<template>
  <div class="form">
    <h3>Register</h3>
    <p>Please fill out this form to register</p>
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
    <div class="form-group">
      <input
        v-model="user.confirmPassword"
        type="password"
        placeholder="Confirm Password"
        class="form-control form-control-lg"
      />
    </div>
    <button @click="register()" class="btn btn-primary btn-lg btn-block">Register</button>
    <button @click="goToLogin()" class="btn btn-primary btn-lg btn-block">Login Instead</button>
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
        confirmPassword: "",
      },
    };
  },
  methods: {
    goToLogin() {
      this.$router.push({ name: "login" });
    },
    register() {
      if (
        this.user.email === "" ||
        this.user.password === "" ||
        this.user.confirmPassword === ""
      ) {
        this.$store.dispatch({
          type: "addAlert",
          message: "Please fill all fields",
          duration: 3000,
          style: "alert-danger",
        });
        return;
      }
      if (this.user.password !== this.user.confirmPassword) {
        this.$store.dispatch({
          type: "addAlert",
          message: "Passwords don't match",
          duration: 3000,
          style: "alert-danger",
        });
        return;
      }
      auth
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
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
</style>