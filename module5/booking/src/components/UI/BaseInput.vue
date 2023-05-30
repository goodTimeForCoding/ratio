<template>
  <input :value="modelValue" @input="updateInput" v-bind="$attrs" />
</template>

<script>
export default {
  name: "base-input",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped lang="scss"></style>
