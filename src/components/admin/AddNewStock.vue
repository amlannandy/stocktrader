<template>
  <div>
    <p class="lead text-muted">Add a New Stock</p>
    <text-field :type="'text'" :hint="'Company'" :value="stock.name" v-model="stock.name"></text-field>
    <text-field :type="'number'" :hint="'Price'" :value="stock.price" v-model="stock.price"></text-field>
    <div class="input-group mb-3">
      <textarea
        placeholder="Description"
        class="form-control"
        v-model="stock.description"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <button @click="addStock()" class="btn btn-success btn-lg btn-block">Save</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TextField from "../ui/TextField.vue";
export default {
  components: {
    "text-field": TextField,
  },
  data() {
    return {
      stock: {
        name: "",
        price: 0,
        description: "",
      },
    };
  },
  methods: {
    addStock() {
      if (
        this.stock.name === "" ||
        this.stock.price <= 0 ||
        this.stock.description == ""
      ) {
        this.$store.dispatch({
          type: "addAlert",
          message: "Please fill all fields",
          duration: 3000,
          style: "alert-danger",
        });
        return;
      }
      this.$store.dispatch({ type: "addStock", stock: this.stock });
      this.$router.push({ name: "admin-home" });
    },
  },
};
</script>
