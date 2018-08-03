import { storiesOf } from "@storybook/vue"
import Centered from "@storybook/addon-centered"
import { withKnobs, text, color } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"

import AddButton from "../components/atoms/buttons/AddButton.vue"
import DeleteButton from "../components/atoms/buttons/AddButton.vue"
import SubmitButton from "../components/atoms/buttons/SubmitButton.vue"
import DatePicker from "../components/atoms/date/DatePicker.vue"
import CheckBox from "../components/atoms/form/CheckBox.vue"

storiesOf("atoms/Button", module)
  .addDecorator(Centered)
  .add("AddButton", () => ({
    components: { AddButton },
    template: `<add-button>label</add-button>`
  }))
  .add("DeleteButton", () => ({
    components: { DeleteButton },
    template: `<delete-button @click.native="action"></delete-button>`,
    methods: { action: action("deleted!") }
  }))
  .add("SubmitButton", () => ({
    components: { SubmitButton },
    template: `<submit-button @click.native="action">送信</submit-button>`,
    methods: { action: action("送信!") }
  }))

storiesOf("atoms/Date", module)
  .addDecorator(Centered)
  .add("DatePicker", () => ({
    components: { DatePicker },
    template: `<date-picker :setDate="action"></date-picker>`,
    methods: { action: action("picked!") }
  }))

storiesOf("atoms/Form", module)
  .addDecorator(Centered)
  .add("CheckBox", () => ({
    components: { CheckBox },
    template: `<check-box @change.native="action" :checked="false"></check-box>`,
    methods: { action: action("checked!") }
  }))
