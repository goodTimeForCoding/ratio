<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="getViewBox"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName" lang="en">{ { iconName } } icon</title>
    <g :fill="iconColor">
      <slot></slot>
    </g>
  </svg>
</template>
<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "box",
    },

    width: {
      type: [Number, String],
      default: 18,
    },

    height: {
      type: [Number, String],
      default: 18,
    },

    iconColor: {
      type: String,
      default: "currentColor",
    },

    viewBox: {
      type: [Number],
    },
  },

  computed: {
    getViewBox() {
      return "0 0 " + this.width + " " + this.height;
    },
  },
};
</script>
<style scoped lang="scss">
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px;
  /* yes, I'm that particular about formatting */
}
</style>
