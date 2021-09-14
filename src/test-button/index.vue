<template>
  <button class="test-button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'test-button',

  props: {
    color: String,
    type: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style lang="scss">
.test-button {
  min-width: 120px;
  color: #fff;
  font-size: 16px;
  line-height: 36px;
  background-color: #f44;
  border: none;
  border-radius: 30px;
}
</style>
