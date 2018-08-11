import Vue from "vue"
import Vuex from "vuex"
import { storiesOf } from "@storybook/vue"
import Centered from "@storybook/addon-centered"
import AddFromUsers from "~/components/organisms/AddFromUsers.vue"
import CreateMails from "~/components/organisms/CreateMails.vue"
import { createStore } from "~/.nuxt/store"
import "~/stories/stubs/nuxt_link"

Vue.use(Vuex)

storiesOf("organisms", module)
  .addDecorator(Centered)
  .add("AddFromUsers", () => ({
    components: { AddFromUsers },
    template: `<add-from-users></add-from-users>`,
    store: createStore()
  }))
  .add("CreateMails", () => ({
    components: { CreateMails },
    template: `<create-mails></create-mails>`,
    store: createStore()
  }))
