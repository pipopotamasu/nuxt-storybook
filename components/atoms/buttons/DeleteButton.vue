<template>
  <span class="user-delete" @click="onDelete">×</span>
</template>

<script>
export default {
  props: {
    onDelete: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.user-delete {
  padding-left: 6em;
}
</style>
