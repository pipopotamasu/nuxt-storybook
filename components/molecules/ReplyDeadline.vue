<template>
  <div class="reply-deadline">
    <label>
      回答期限
    </label>
    <date-picker
      :set-date="setDate"
    />
  </div>
</template>

<script>
import DatePicker from "~/components/atoms/date/DatePicker.vue"

export default {
  components: {
    DatePicker
  },
  props: {
    setDate: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss">
.reply-deadline {
  background-color: white;
  width: 100%;
  padding: 0.5em 1em;
}
</style>
