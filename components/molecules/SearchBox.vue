<template>
  <div class="search-box">
    <search-icon/>
    <text-input
      v-model="input"
      :placeholder="'名前で検索'"
      :on-keyup="search"/>
  </div>
</template>

<script>
import SearchIcon from "~/components/atoms/search/SearchIcon.vue"
import TextInput from "~/components/atoms/form/TextInput.vue"

export default {
  components: {
    SearchIcon,
    TextInput
  },
  props: {
    search: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      input: ""
    }
  }
}
</script>

<style lang="scss" scoped>
.search-box {
  background-color: white;
}
</style>
