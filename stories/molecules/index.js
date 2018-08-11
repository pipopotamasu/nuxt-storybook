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
import FromUsers from "~/components/molecules/FromUsers.vue"
import MailTopics from "~/components/molecules/MailTopics.vue"
import ReplyDeadline from "~/components/molecules/ReplyDeadline.vue"
import RoomUsers from "~/components/molecules/RoomUsers.vue"
import "~/stories/stubs/nuxt_link"

storiesOf("molecules", module)
  .addDecorator(Centered)
  .addDecorator(withKnobs)
  .add("FromUsers", () => ({
    components: { FromUsers },
    template: `<from-users
                :currentUser="{
                  icon_path: '${iconPath}',
                  first_name: '太郎',
                  last_name: '山田'
                }"
                :roomUsersCount="5"
                :fromUsers="[
                  { id: 1, icon_path: '${iconPath}', first_name: '智', last_name: '里中' }
                ]"
                :deleteFromUser="action"
               ></from-users>`,
    methods: { action: action("deleted!") }
  }))
  .add("MailTopics", () => ({
    components: { MailTopics },
    template: `<mail-topics
                :topics="[
                  { id: 1, active: false, content: 'トピック1' },
                  { id: 2, active: true, content: 'トピック2' }
                ]"
                :toggle="action"
               ></mail-topics>`,
    methods: { action: action("toggled!") }
  }))
  .add("ReplyDeadline", () => ({
    components: { ReplyDeadline },
    template: `<reply-deadline
                :setDate="action"
               ></reply-deadline>`,
    methods: { action: action("date setted!") }
  }))
  .add("RoomUsers", () => ({
    components: { RoomUsers },
    template: `<room-users
                :roomUsers="[
                  { id: 1, icon_path: '${iconPath}', first_name: '智', last_name: '里中' },
                  { id: 3, icon_path: '${iconPath}', first_name: '太郎', last_name: '山田' }
                ]"
                :fromUserIds="[1,2]"
                :setFromUsers="set"
                :deleteFromUsers="deleteUser"
               ></room-users>`,
    methods: { set: action("setted!"), deleteUser: action("deleted!") }
  }))
