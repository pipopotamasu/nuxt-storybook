<template>
  <div class="add-from-users">
    <search-box :search="filterUsers"/>
    <room-users
      :room-users="users"
      :from-user-ids="this.$store.getters['mail/fromUserIds']"
      :set-from-users="user => $store.dispatch('mail/setFromUser', user)"
      :delete-from-users="user => $store.dispatch('mail/deleteFromUser', user)"/>
    <button><nuxt-link to="/mails/new">戻る</nuxt-link></button>
  </div>
</template>

<script>
import SearchBox from "~/components/molecules/SearchBox.vue"
import RoomUsers from "~/components/molecules/RoomUsers.vue"

export default {
  components: {
    SearchBox,
    RoomUsers
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    this.filterUsers("")
  },
  methods: {
    filterUsers(word) {
      this.users = this.$store.getters["room/filterUsers"](word)
    }
  }
}
</script>

<style lang="scss" scoped>
.add-from-users {
  background-color: gray;
  padding: 1em 1em 0 1em;
}
</style>
