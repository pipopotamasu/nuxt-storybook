<template>
  <input :checked="checked" class="text-input" type="checkbox">
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
