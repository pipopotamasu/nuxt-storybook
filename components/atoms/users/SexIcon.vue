<template>
  <div class="sex-icons">
    <img v-if="sex === 1" class="sex-icon" src="https://png.icons8.com/color/1600/person-male.png" >
    <img v-else class="sex-icon" src="https://png.icons8.com/office/1600/collaborator-female.png" >
  </div>
</template>

<script>
export default {
  props: {
    sex: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.sex-icons {
  display: inline;
}
.sex-icon {
  border-radius: 50%;
  width: 2em;
  margin-bottom: -0.5em;
}
</style>
