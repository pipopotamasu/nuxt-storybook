<template>
  <input
    :placeholder="placeholder"
    v-model="input"
    class="text-input"
    type="text"
    @keyup="onKeyup(input)">
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    onKeyup: {
      type: Function,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      input: ""
    }
  }
}
</script>

<style lang="scss" scoped>
.text-input {
  width: 85%;
}
</style>
