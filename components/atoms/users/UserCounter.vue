<template>
  <div class="user-counter">
    <label>From</label>
    <span>({{ counterText }})</span>
  </div>
</template>

<script>
export default {
  props: {
    numerator: {
      type: Number,
      required: true
    },
    denominator: {
      type: Number,
      required: true
    }
  },
  computed: {
    counterText() {
      return `${this.numerator}/${this.denominator}`
    }
  }
}
</script>

<style lang="scss" scoped>
.user-counter {
  float: left;
}
</style>
