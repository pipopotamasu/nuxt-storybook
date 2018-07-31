<template>
  <div class="from-users">
    <div class="header">
      <user-counter :numerator="fromUsersCount" :denominator="roomUsersCount"/>
      <add-button><nuxt-link to="/mails/select_from_users"><label>メンバー追加</label></nuxt-link></add-button>
    </div>
    <div class="users">
      <div class="user current-user">
        <user-icon :icon_path="currentUser.icon_path" class="user-element"/>
        <user-name :last_name="currentUser.last_name" :first_name="currentUser.first_name" class="user-element"/>
      </div>
      <div v-for="user in fromUsers" :key="user.id" class="user">
        <user-icon :icon_path="user.icon_path" class="user-element"/>
        <user-name :last_name="user.last_name" :first_name="user.first_name" class="user-element"/>
        <delete-button :on-delete="onDelete(user)" class="user-delete"/>
      </div>
    </div>
  </div>
</template>

<script>
import UserCounter from "~/components/atoms/users/UserCounter.vue"
import AddButton from "~/components/atoms/buttons/AddButton.vue"
import UserIcon from "~/components/atoms/users/UserIcon.vue"
import UserName from "~/components/atoms/users/UserName.vue"
import DeleteButton from "~/components/atoms/buttons/DeleteButton.vue"

export default {
  components: {
    UserCounter,
    AddButton,
    UserIcon,
    UserName,
    DeleteButton
  },
  props: {
    currentUser: {
      type: Object,
      required: true
    },
    roomUsersCount: {
      type: Number,
      required: true
    },
    fromUsers: {
      type: Array,
      required: true
    },
    deleteFromUser: {
      type: Function,
      required: true
    }
  },
  computed: {
    fromUsersCount() {
      return this.fromUsers.length + 1
    }
  },
  methods: {
    onDelete(user) {
      return () => this.deleteFromUser(user)
    }
  }
}
</script>

<style lang="scss" scoped>
.from-users {
  width: 100%;
  text-align: left;
  padding: 0.5em 1em;
  background-color: rgb(208, 255, 0);

  .users {
    clear: left;
    padding-top: 0.5em;

    .user {
      border-bottom: solid 1px gray;
      padding-top: 0.5em;

      .user-element {
        padding: 0 0.5em;
      }

      .user-delete {
        padding-left: 11em;
      }
    }
  }
}
</style>
