import { storiesOf } from "@storybook/vue"
import Centered from "@storybook/addon-centered"
import { withKnobs, number, boolean, text } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"

import iconPath from "~/static/icons/wakabayashi.jpg"

import AddButton from "~/components/atoms/buttons/AddButton.vue"
import DeleteButton from "~/components/atoms/buttons/AddButton.vue"
import SubmitButton from "~/components/atoms/buttons/SubmitButton.vue"
import DatePicker from "~/components/atoms/date/DatePicker.vue"
import CheckBox from "~/components/atoms/form/CheckBox.vue"
import TextInput from "~/components/atoms/form/TextInput.vue"
import SearchIcon from "~/components/atoms/search/SearchIcon.vue"
import SexIcon from "~/components/atoms/users/SexIcon.vue"
import UserCounter from "~/components/atoms/users/UserCounter.vue"
import UserIcon from "~/components/atoms/users/UserIcon.vue"
import UserName from "~/components/atoms/users/UserName.vue"

storiesOf("atoms/Button", module)
  .addDecorator(Centered)
  .add("AddButton", () => ({
    components: { AddButton },
    template: `<add-button @click.native="action">label</add-button>`,
    methods: { action: action("added!") }
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
  .addDecorator(withKnobs)
  .add("CheckBox", () => ({
    components: { CheckBox },
    template: `<check-box @change.native="action" :checked="${boolean(
      "checked",
      false
    )}"></check-box>`,
    methods: { action: action("checked!") }
  }))
  .add("TextInput", () => ({
    components: { TextInput },
    template: `<text-input @keyup.native="action" :placeholder="'入力してください'"></text-input>`,
    methods: { action: action("inputed!") }
  }))

storiesOf("atoms/Search", module)
  .addDecorator(Centered)
  .add("SearchIcon", () => ({
    components: { SearchIcon },
    template: `<search-icon></search-icon>`
  }))

storiesOf("atoms/Users", module)
  .addDecorator(Centered)
  .addDecorator(withKnobs)
  .add("SexIcon", () => ({
    components: { SexIcon },
    template: `<sex-icon :sex="${number("Sex", 1)}"></sex-icon>`
  }))
  .add("UserCounter", () => ({
    components: { UserCounter },
    template: `<user-counter :numerator="${number(
      "Numerator",
      1
    )}" :denominator="${number("Denominator", 2)}"></user-counter>`
  }))
  .add("UserIcon", () => ({
    components: { UserIcon },
    template: `<user-icon :icon_path="'${text(
      "Image Path",
      iconPath
    )}'"></user-icon>`
  }))
  .add("UserName", () => ({
    components: { UserName },
    template: `<user-name :last_name="'${text(
      "LastName",
      "村上"
    )}'" :first_name="'${text("FirstName", "大和")}'"></user-name>`
  }))
