<template>
  <img :src="icon_path" class="user-icon" >
</template>

<script>
export default {
  props: {
    icon_path: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.user-icon {
  border-radius: 50%;
  width: 3em;
  margin-bottom: -0.5em;
}
</style>
