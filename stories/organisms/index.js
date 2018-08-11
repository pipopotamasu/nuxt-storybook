import Vue from "vue"
import Vuex from "vuex"
import { storiesOf } from "@storybook/vue"
import Centered from "@storybook/addon-centered"
import {
  withKnobs,
  number,
  boolean,
  text,
  object,
  array
} from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import iconPath from "~/static/icons/wakabayashi.jpg"
import AddFromUsers from "~/components/organisms/AddFromUsers.vue"
import { createStore } from "~/.nuxt/store"
import "~/stories/stubs/nuxt_link"

Vue.use(Vuex)

storiesOf("organisms", module)
  .addDecorator(Centered)
  .addDecorator(withKnobs)
  .add("AddFromUsers", () => ({
    components: { AddFromUsers },
    template: `<add-from-users></add-from-users>`,
    store: createStore()
  }))
