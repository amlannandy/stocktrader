<template>
  <div class="col-sm-6 col-md-3">
    <div class="card my-3">
      <div class="card-body">
        <h5 class="card-title">{{ stock.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">₹ {{ stock.price }}</h6>
        <p class="card-text">
          {{ stock.description }}
        </p>
        <div class="input-group">
          <input
            type="number"
            v-model="quantity"
            placeholder="Quantity"
            class="form-control"
          />
          <button @click="test()" class="btn btn-success input-group-append">
            Buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebaseConfig";
export default {
  props: {
    stock: Object
  },
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    test() {
      db.collection("test").add({
        createdOn: new Date(),
        content: "blah bal"
      });
    }
  }
};
</script>
