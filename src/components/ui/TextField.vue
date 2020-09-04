<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">{{ hint }}</span>
    </div>
    <input
      :value="value"
      :type="type"
      class="form-control"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ["hint", "value", "type"],
};
</script>
