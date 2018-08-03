<template>
  <article class="container mail-new">
    <target-user
      :user="targetUser"
    />
    <mail-topics
      :topics="topics"
      :toggle="i => $store.dispatch('mail/toggleActivation', i)"
    />
    <reply-deadline
      :set-date="date => $store.dispatch('mail/setReplyDeadlineDate', date[0])"
    />
    <from-users
      :current-user="currentUser"
      :room-users-count="roomUsersCount"
      :from-users="fromUsers"
      :delete-from-user="user => $store.dispatch('mail/deleteFromUser', user)"
    />
    <div class="button-area">
      <submit-button @click.native="$store.dispatch('mail/createMail')">送信</submit-button>
    </div>
  </article>
</template>

<script>
import TargetUser from "~/components/molecules/TargetUser.vue"
import MailTopics from "~/components/molecules/MailTopics.vue"
import ReplyDeadline from "~/components/molecules/ReplyDeadline.vue"
import FromUsers from "~/components/molecules/FromUsers.vue"
import SubmitButton from "~/components/atoms/buttons/SubmitButton.vue"

export default {
  components: {
    TargetUser,
    MailTopics,
    ReplyDeadline,
    FromUsers,
    SubmitButton
  },
  computed: {
    targetUser() {
      return this.$store.state.mail.targetUser
    },
    topics() {
      return this.$store.state.mail.topics
    },
    currentUser() {
      return this.$store.state.user_info.currentUser
    },
    fromUsers() {
      return this.$store.state.mail.fromUsers
    },
    roomUsersCount() {
      return this.$store.state.room.usersWithoutCurrentAndTargetUser.length + 1
    } // 自分分を追加
  },
  created() {
    // NOTE: 本来ならこの画面に遷移する前にターゲットとなるユーザを設定すべき
    this.$store.dispatch("mail/setTargetUser", {
      id: 4,
      icon_path: "../icons/wakabayashi.jpg",
      last_name: "村上",
      first_name: "大和",
      sex: 1
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;

  .button-area {
    background-color: blueviolet;
    width: 100%;
    padding: 0.5em 1em;
  }
}
</style>
