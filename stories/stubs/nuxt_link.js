import Vue from "vue"

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
