<template>
  <div class="users">
    <div v-for="(user, i) in roomUsers" :key="user.id" class="user">
      <check-box :on-change="onChange(user, i)" :checked="fromUserIds.includes(user.id)" class="checkbox"/>
      <user-icon :icon_path="user.icon_path" class="user-element"/>
      <user-name :last_name="user.last_name" :first_name="user.first_name" class="user-element"/>
    </div>
  </div>
</template>

<script>
import UserIcon from "~/components/atoms/users/UserIcon.vue"
import UserName from "~/components/atoms/users/UserName.vue"
import CheckBox from "~/components/atoms/form/CheckBox.vue"

export default {
  components: {
    UserIcon,
    UserName,
    CheckBox
  },
  props: {
    roomUsers: {
      type: Array,
      required: true
    },
    fromUserIds: {
      type: Array,
      required: true
    },
    setFromUsers: {
      type: Function,
      required: true
    },
    deleteFromUsers: {
      type: Function,
      required: true
    }
  },
  methods: {
    onChange(user, index) {
      return e => {
        if (e.currentTarget.checked) {
          this.setFromUsers(user)
        } else {
          this.deleteFromUsers(index)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.users {
  clear: left;
  padding-top: 0.5em;

  .user {
    border-bottom: solid 1px gray;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    margin: 0 -1em;
    background-color: white;

    .user-element {
      padding: 0 0.5em;
    }

    .checkbox {
      margin-left: 1em;
    }
  }
}
</style>
