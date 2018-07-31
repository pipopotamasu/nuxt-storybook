<template>
  <div class="target-user">
    <span class="user-item">To</span>
    <user-icon :icon_path="user.icon_path" class="user-item"/>
    <user-name :last_name="user.last_name" :first_name="user.first_name" class="user-item"/>
    <sex-icon :sex="user.sex" class="user-item"/>
  </div>
</template>

<script>
import UserIcon from "~/components/atoms/users/UserIcon.vue"
import UserName from "~/components/atoms/users/UserName.vue"
import SexIcon from "~/components/atoms/users/SexIcon.vue"

export default {
  components: {
    UserIcon,
    UserName,
    SexIcon
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.target-user {
  width: 100%;
  text-align: left;
  padding: 0.5em 1em;
  background-color: blue;

  .user-item {
    padding: 0 0.5em;
  }
}
</style>
