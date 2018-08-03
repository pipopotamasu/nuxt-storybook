<template>
  <input
    :placeholder="placeholder"
    class="text-input"
    type="text">
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: false,
      default: ""
    }
  }
}
</script>

<style lang="scss" scoped>
.text-input {
  width: 85%;
}
</style>
