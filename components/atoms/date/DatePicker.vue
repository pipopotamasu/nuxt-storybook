<template>
  <flat-pickr v-model="date" @on-change="setDate"/>
</template>

<script>
import flatPickr from "vue-flatpickr-component"
// FIXME: なぜかcssが適用されない...
import "flatpickr/dist/flatpickr.css"

export default {
  components: {
    flatPickr
  },
  props: {
    setDate: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      date: new Date()
    }
  }
}
</script>
