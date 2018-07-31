<template>
  <div class="mail-topics">
    <span>Q.質問項目</span>
    <ol class="topics">
      <li v-for="(topic, i) in topics"
          :key="topic.id"
          :class="{ active: topic.active }"
          @click="toggle(i)"
      >{{ topic.content }}</li>
    </ol>
    <ul class="choices">
      <li v-for="topic in topics"
          :key="topic.id"
          :class="{ active: topic.active }"
      >{{ topic.id }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    topics: {
      type: Array,
      required: true
    },
    toggle: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.mail-topics {
  background-color: green;
  width: 100%;
  padding: 0.5em 1em;

  .topics {
    text-align: left;

    li.active {
      cursor: pointer;
      color: red;
    }
  }

  .choices {
    li {
      cursor: pointer;
      display: inline-block;
      font-size: 12px;
      width: 25%;
    }

    .active {
      background-color: red;
    }
  }
}
</style>

this.$store.dispatch('mails/setTargetUser', topic.id)
