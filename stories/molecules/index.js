import { storiesOf } from "@storybook/vue"
import Centered from "@storybook/addon-centered"
import { withKnobs, number, boolean, text } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"

import FromUsers from "../../components/molecules/FromUsers.vue"

storiesOf("molecules", module)
  .addDecorator(Centered)
  .add("FromUsers", () => ({
    components: { FromUsers },
    template: `<from-users
                :currentUser="{ icon_path: 'hoge', first_name: 'test', last_name: 'tarou' }"
                :roomUsersCount="5"
                :fromUsers="[
                  { id: 1, icon_path: 'fuga', first_name: 'test', last_name: 'hanako' }
                ]"
                :deleteFromUser="() => {}"
               ></from-users>`
  }))
