import Vue from "vue"
import { action } from "@storybook/addon-actions"

// nuxt-linkのwrap
Vue.component("NuxtLink", {
  props: ["to"],
  methods: {
    log() {
      action("link target")(this.to)
    }
  },
  template: '<div @click="log()"><slot>NuxtLink</slot></div>'
})
