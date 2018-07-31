<template>
  <input :checked="checked" class="text-input" type="checkbox" @change="onChange">
</template>

<script>
export default {
  props: {
    onChange: {
      type: Function,
      required: false,
      default: () => {}
    },
    checked: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
