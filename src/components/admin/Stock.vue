<template>
  <div>
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">{{data.name}}</h5>
        <text-field :type="'number'" :hint="'Price'" v-model="stock.price"></text-field>
        <div class="input-group mb-3">
          <textarea
            placeholder="Description"
            class="form-control"
            v-model="stock.description"
            cols="100"
            rows="3"
          ></textarea>
        </div>
        <button @click="updateStock()" class="btn btn-warning">Update</button>
        <button class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TextField from "../ui/TextField";
export default {
  components: {
    "text-field": TextField,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      stock: {
        price: this.data.price,
        description: this.data.description,
      },
    };
  },
  methods: {
    updateStock() {
      console.log(this.stock);
    },
  },
};
</script>