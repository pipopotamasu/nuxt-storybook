import { storiesOf } from "@storybook/vue"
import Centered from "@storybook/addon-centered"
import { withKnobs, number, boolean, text } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import "~/stories/stubs/nuxt_link"
import iconPath from "~/static/icons/wakabayashi.jpg"
import FromUsers from "~/components/molecules/FromUsers.vue"

storiesOf("molecules", module)
  .addDecorator(Centered)
  .add("FromUsers", () => ({
    components: { FromUsers },
    template: `<from-users
                :currentUser="{ icon_path: '${iconPath}', first_name: '太郎', last_name: '山田' }"
                :roomUsersCount="5"
                :fromUsers="[
                  { id: 1, icon_path: '${iconPath}', first_name: '智', last_name: '里中' }
                ]"
                :deleteFromUser="action"
               ></from-users>`,
    methods: { action: action("deleted!") }
  }))
